<template>
  <div class="botao">
    <circulo
      class="acionador"
      :class="cor"
      :cor_pai="cor"
      v-on:click="troca_cor()"
    ></circulo>
  </div>
</template>

<script>
import circulo from "./Circulo.vue";

export default {
  name: "botao_cor",

  components: { circulo },

  props: ["cor"],

  data: function () {
    return {
      cor_pai: this.cor,
    };
  },

  methods: {
    troca_cor: function () {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
