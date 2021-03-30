<template>
  <div>
    <ajuda v-bind="coresAjuda" />
    <div class="inline_block">
      <botao-cor
        v-for="senha in coresSenha"
        v-bind:key="senha.id"
        class="inline_block"
        :cor="senha.cor"
        v-on:click="() => mudarCor(senha.id)"
      ></botao-cor>
    </div>
    <div class="inline_block inserir_senha">
      <botao-inserir v-on:click="conferir_resposta" v-if="ativo" />
    </div>
  </div>
</template>

<script>
import Ajuda from "./Ajuda.vue";
import BotaoCor from "./BotaoCor.vue";
import BotaoInserir from "./BotaoInserir.vue";
import { coresPadrao } from "../methods.js";

export default {
  name: "caixa_botao",

  props: ["ativo"],

  data() {
    return {
      coresPadrao,
      atualiza: true,

      coresSenha: [
        {
          id: 0,
          num: -1,
          cor: "default",
        },
        {
          id: 1,
          num: -1,
          cor: "default",
        },
        {
          id: 2,
          num: -1,
          cor: "default",
        },
        {
          id: 3,
          num: -1,
          cor: "default",
        },
      ],
    };
  },

  components: { Ajuda, BotaoCor, BotaoInserir },

  computed: {
    coresAjuda() {
      return {
        cor1: "default",
        cor2: "default",
        cor3: "default",
        cor4: "default",
      };
    },
  },

  watch: {
    coresSenha: {
      handler(value) {
        const cores = value.map(({ cor }) => cor);
        this.$emit("atualizar-cores", cores);
      },
      deep: true,
    },
  },

  methods: {
    mudarCor(index) {
      this.coresSenha[index].num =
        this.coresSenha[index].num < this.coresPadrao.length - 1
          ? this.coresSenha[index].num + 1
          : 0;
      this.coresSenha[index].cor = this.coresPadrao[this.coresSenha[index].num];
    },

    conferir_resposta() {
      this.$emit("conferir-resposta", this.coresSenha, this.coresAjuda);
    },
  },
};
</script>

<style></style>
