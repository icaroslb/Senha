<template>
  <div id="Jogo_senha">
    <resposta :cores="senhaGerada" :recomecar="recomecar" />
    <caixa-botao
      v-for="campo in campos"
      class="campo"
      :key="campo.id"
      :id="campo.id"
      :ativo="campo.ativo"
      v-on:conferir-resposta="
        (resposta, ajuda) => conferirResposta(resposta, ajuda)
      "
      @atualizar-cores="(cores) => atualizarCores(campo.id, cores)"
    >
    </caixa-botao>
    <rodape
      :recomecar="recomecar"
      :ganhou="ganhou"
      @conferirCampo="desativarCampo"
      @reiniciar="reiniciar"
    />
  </div>
</template>

<script>
import resposta from "./Resposta.vue";
import caixaBotao from "./CaixaBotao.vue";
import rodape from "./Rodape.vue";
import { coresPadrao } from "../methods.js";

export default {
  name: "JogoSenha",

  components: { resposta, caixaBotao, rodape },

  data() {
    return {
      senhaGerada: [
        {
          id: 0,
          cor: "default",
        },
        {
          id: 1,
          cor: "default",
        },
        {
          id: 2,
          cor: "default",
        },
        {
          id: 3,
          cor: "default",
        },
      ],
      tentativas: 0,
      recomecar: false,
      ganhou: false,
      campos: [
        //{
        //  id: "campo-0",
        //  values: ["default", "default", "default", "default"],
        //  ativo: true,
        //},
      ],
      acertou: false,
    };
  },

  mounted() {
    this.acertou = false;

    this.gerarSenha();

    this.adicionarNovoCampo();
  },

  updated() {
    if (this.campos.length === 0) this.adicionarNovoCampo();
  },

  methods: {
    numRandomico(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    gerarSenha() {
      let indices = [];
      let num_gerado;
      let novaSenha = [];

      for (let i = 0; i < coresPadrao.length; i++) indices.push(i);

      for (let i = 0; i < 4; i++) {
        num_gerado = this.numRandomico(0, 7 - i);
        novaSenha.push(coresPadrao[indices[num_gerado]]);
        indices[num_gerado] = indices[indices.length - 1];
        indices.pop();
      }

      for (let i = 0; i < this.senhaGerada.length; i++)
        this.senhaGerada[i].cor = novaSenha[i];
    },

    atualizarCores(id, cores) {
      const campo = this.campos.find((c) => c.id === id);
      campo.values = cores;
    },

    adicionarNovoCampo() {
      this.campos.push({
        id: `campo-${this.campos.length}`,
        values: ["default", "default", "default", "default"],
        ativo: true,
      });
    },

    desativarCampo() {
      this.campos[this.campos.length - 1].ativo = false;
    },

    conferirResposta(resposta, ajuda) {
      let resposta_certa = true;

      for (let i = 0; i < 4; i++) {
        if (resposta[i].cor === this.senhaGerada[i].cor) {
          ajuda[`cor${i + 1}`] = "preto";
        } else {
          resposta_certa = false;

          for (let j = 0; j < 4; j++) {
            if (i != j && resposta[i].cor === this.senhaGerada[j].cor) {
              ajuda[`cor${i + 1}`] = "branco";
              break;
            }
          }
        }
      }

      if (resposta_certa) {
        this.resposta = resposta_certa;

        this.ganhou = true;
        this.recomecar = true;
      } else {
        if (this.campos.length < 10) {
          this.adicionarNovoCampo();
        } else {
          this.recomecar = true;
        }
      }
    },

    reiniciar() {
      this.campos = [];

      this.recomecar = false;
      this.ganhou = false;

      this.gerarSenha();

      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
#Jogo_senha {
  --largura: 390px;
  --altura: 900px;

  --campo-altura: calc((var(--altura) - 120px) / 10);

  width: var(--largura);
  height: var(--altura);

  background-color: burlywood;
  padding: calc(var(--campo-altura) + 12px) 10px
    calc(var(--campo-altura) + 12px) 10px;
}

body {
  background-color: #6c7a89;
}

.campo {
  width: var(--largura);
  height: var(--campo-altura);

  padding: 4px 0px 8px 0px;
}

.inline_block {
  display: inline-block;
}

.botao-infor {
  margin-top: 36px;

  border-radius: 5%;
  border: solid black 2px;

  background-color: #d3a05f;

  font-weight: bolder;

  cursor: pointer;
}
</style>
