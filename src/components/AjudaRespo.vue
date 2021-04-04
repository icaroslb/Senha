<template>
  <div class="caixa_metade">
    <circulo :class="cor"></circulo>
  </div>
</template>

<script>
import circulo from "./Circulo.vue";

export default {
  name: "ajuda_respo",

  components: { circulo },

  props: ["cor"],
};
</script>

<style>
.caixa_metade {
  width: 40%;
  height: 40%;

  display: inline-block;
  padding: 5% 5% 5% 5%;
}
</style>
