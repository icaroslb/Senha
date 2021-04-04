<template>
  <div class="botao">
    <circulo class="acionador" :class="cor" v-on:click="troca_cor()" />
  </div>
</template>

<script>
import circulo from "./Circulo.vue";

export default {
  name: "botao_cor",

  components: { circulo },

  props: ["cor"],

  methods: {
    troca_cor: function () {
      this.$emit("click");
    },
  },
};
</script>

<style>
.botao {
  width: 23%;
  height: 98%;
  padding: 1%;
}

.acionador {
  cursor: pointer;
}
</style>
