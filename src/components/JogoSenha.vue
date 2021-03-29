<template>
  <div id="Jogo_senha">
    <caixa-botao
      v-for="campo in campos"
      :key="campo.id"
      :id="campo.id"
      v-on:conferir-resposta="conferirResposta"
      @atualizar-cores="(cores) => atualizarCores(campo.id, cores)"
    >
    </caixa-botao>
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
      campos: [
        {
          id: "campo-0",
          values: ["default", "default", "default", "default"],
        },
      ],
      acertou: false,
    };
  },

  mounted() {
    this.acertou = false;

    console.log("app-vue:", document.getElementById("Jogo_senha"));

    let indices = [0, 1, 2, 3, 4, 5, 6];
    let num_gerado;
    this.senha_gerada = [];

    for (let i = 0; i < 4; i++) {
      num_gerado = this.numRandomico(0, 7 - i);
      this.senha_gerada.push(coresPadrao[indices[num_gerado]]);
      indices[num_gerado] = indices[indices.length - 1];
      indices.pop();
    }

    console.log(this.senha_gerada);
    // this.adicionarNovaSenha("default", "default", "default", "default");
  },

  methods: {
    numRandomico(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    atualizarCores(id, cores) {
      const campo = this.campos.find((c) => c.id === id);
      campo.values = cores;
    },

    adicionarNovaSenha() {
      this.campos.push({
        id: `campo-${this.campos.length}`,
        values: ["default", "default", "default", "default"],
      });

      // let novo_id = "campo_" + this.campos.length;
      // document.getElementById("Jogo_senha").innerHTML +=
      //   "<caixa-botao id=" +
      //   novo_id +
      //   ' v-on:conferir_resposta="conferirResposta"></caixa-botao>';

      // let novo_campo = new Vue({ el: "#" + novo_id });
      // this.campos.push(novo_campo);

      // novo_campo.cor_1 = cor_1;
      // novo_campo.cor_2 = cor_2;
      // novo_campo.cor_3 = cor_3;
      // novo_campo.cor_4 = cor_4;

      // console.log(novo_campo);
    },

    conferirResposta() {
      let campo = this.campos[this.campos.length - 1];
      console.log(campo);
      let ajuda = ["default", "default", "default", "default"];
      let senha = campo.values;
      let resposta_certa = true;

      for (let i = 0; i < 4; i++) {
        if (senha[i] === this.senha_gerada[i]) {
          ajuda[i] = "preto";
        } else {
          resposta_certa = false;

          for (let j = 0; j < 4; j++) {
            if (i != j && senha[i] === this.senha_gerada[j]) {
              ajuda[i] = "branco";
              break;
            }
          }
        }
      }

      campo.ajuda_1 = ajuda[0];
      campo.ajuda_2 = ajuda[1];
      campo.ajuda_3 = ajuda[2];
      campo.ajuda_4 = ajuda[3];

      if (resposta_certa) {
        console.log("Você acertou!!! :)");
        this.resposta = resposta_certa;
      } else {
        console.log("Ainda não :(");
        this.adicionarNovaSenha();
      }

      campo.seen = false;
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

.botao_inserir {
  overflow: auto;
  margin-top: 36px;

  border-radius: 5%;
  border: solid black 2px;

  background-color: #aa6a2c;

  font-weight: bolder;

  cursor: pointer;
}
</style>
