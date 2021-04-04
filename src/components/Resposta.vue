<template>
  <div class="resposta campo">
    <div class="caixa_botao caixaRespo" v-if="recomecar">
      <botao-cor
        v-for="respo in cores"
        v-bind:key="respo.id"
        class="inline_block"
        :cor="respo.cor"
      ></botao-cor>
    </div>
  </div>
</template>

<script>
import BotaoCor from "./BotaoCor.vue";

export default {
  components: { BotaoCor },

  props: ["cores", "recomecar"],
};
</script>

<style>
.resposta {
  background-color: burlywood;

  position: fixed;
  top: 0;

  border-bottom: solid black 1px;
}

.caixaRespo {
  padding: 0px 10% 0px 10%;
}
</style>
