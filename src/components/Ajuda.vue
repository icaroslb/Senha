<template>
  <div class="caixa">
    <ajuda-respo :cor="cor1"></ajuda-respo>
    <ajuda-respo :cor="cor2"></ajuda-respo>
    <ajuda-respo :cor="cor3"></ajuda-respo>
    <ajuda-respo :cor="cor4"></ajuda-respo>
  </div>
</template>

<script>
import AjudaRespo from "./AjudaRespo.vue";

export default {
  name: "ajuda",

  components: { AjudaRespo },

  props: ["cor1", "cor2", "cor3", "cor4"],
};
</script>

<style></style>
