<template>
  <div id="Jogo_senha">
    <caixa-botao
      v-for="campo in campos"
      :key="campo.id"
      :id="campo.id"
      :ativo="campo.ativo"
      v-on:conferir-resposta="
        (resposta, ajuda) => conferirResposta(resposta, ajuda)
      "
      @atualizar-cores="(cores) => atualizarCores(campo.id, cores)"
    >
    </caixa-botao>
    <button v-if="recomecar" class="botao-infor" v-on:click="reiniciar()">
      Reiniciar
    </button>
    <p v-if="recomecar">{{ mensagem }}</p>
  </div>
</template>

<script>
import caixaBotao from "./CaixaBotao.vue";
import { coresPadrao } from "../methods.js";

export default {
  name: "JogoSenha",

  components: { caixaBotao },

  data() {
    return {
      senhaGerada: [],
      tentativas: 0,
      recomecar: false,
      mensagem: "",
      campos: [],
      acertou: false,
    };
  },

  //{
  //  id: "campo-0",
  //  values: ["default", "default", "default", "default"],
  //  ativo: true,
  //},

  mounted() {
    this.acertou = false;

    console.log("app-vue:", document.getElementById("Jogo_senha"));

    this.gerarSenha();

    this.adicionarNovaSenha();
  },

  updated() {
    if (this.campos.length === 0) this.adicionarNovaSenha();
  },

  methods: {
    numRandomico(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    gerarSenha() {
      let indices = [];
      let num_gerado;
      this.senha_gerada = [];

      for (let i = 0; i < coresPadrao.length; i++) indices.push(i);

      for (let i = 0; i < 4; i++) {
        num_gerado = this.numRandomico(0, 7 - i);
        this.senha_gerada.push(coresPadrao[indices[num_gerado]]);
        indices[num_gerado] = indices[indices.length - 1];
        indices.pop();
      }

      console.log(this.senha_gerada);
    },

    atualizarCores(id, cores) {
      const campo = this.campos.find((c) => c.id === id);
      campo.values = cores;
    },

    adicionarNovaSenha() {
      this.campos.push({
        id: `campo-${this.campos.length}`,
        values: ["default", "default", "default", "default"],
        ativo: true,
      });
    },

    conferirResposta(resposta, ajuda) {
      let resposta_certa = true;

      for (let i = 0; i < 4; i++) {
        if (resposta[i].cor === this.senha_gerada[i]) {
          ajuda[`cor${i + 1}`] = "preto";
        } else {
          resposta_certa = false;

          for (let j = 0; j < 4; j++) {
            if (i != j && resposta[i].cor === this.senha_gerada[j]) {
              ajuda[`cor${i + 1}`] = "branco";
              break;
            }
          }
        }
      }

      this.campos[this.campos.length - 1].ativo = false;

      if (resposta_certa) {
        console.log("Você acertou!!! :)");
        this.resposta = resposta_certa;

        this.mensagem = "Você acertou!";
        this.recomecar = true;
      } else {
        console.log("Ainda não :(");

        if (this.campos.length < 10) {
          this.adicionarNovaSenha();
        } else {
          this.mensagem = "Você não conseguiu!";
          this.recomecar = true;
        }
      }
    },

    reiniciar() {
      this.campos = [];

      this.recomecar = false;

      this.gerarSenha();
    },
  },
};
</script>

<style>
* {
  background-color: peru;
}

.botao {
  width: 90px;
  height: 90px;

  padding: 10px;
}

.caixa {
  width: 90px;
  height: 90px;

  display: inline-block;
}

.caixa_metade {
  width: 45%;
  height: 45%;

  display: inline-block;

  padding: 1% 1% 1% 1%;
}

.circulo {
  width: 100%;
  height: 100%;

  display: inline-block;

  border-radius: 100%;
  border: solid black 2px;

  background-color: #aa6a2c;
}

.acionador {
  cursor: pointer;
}

.amarelo {
  background-color: yellow;
}

.azul {
  background-color: blue;
}

.vermelho {
  background-color: red;
}

.verde {
  background-color: green;
}

.rosa {
  background-color: pink;
}

.roxo {
  background-color: purple;
}

.laranja {
  background-color: orange;
}

.default {
  background-color: #aa6a2c;
}

.preto {
  background-color: black;
}

.branco {
  background-color: white;
}

.inline_block {
  display: inline-block;
}

.inserir_senha {
  width: 90px;
  height: 110px;

  box-sizing: border-box;
  position: absolute;

  margin-left: 15px;
}

.botao-infor {
  overflow: auto;
  margin-top: 36px;

  border-radius: 5%;
  border: solid black 2px;

  background-color: #aa6a2c;

  font-weight: bolder;

  cursor: pointer;
}
</style>
