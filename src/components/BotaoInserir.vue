<template>
  <button class="inline_block botao-infor" v-if="seen" v-on:click="clique">
    Inserir senha
  </button>
</template>

<script>
export default {
  name: "botao_inserir",

  data() {
    return {
      seen: true,
    };
  },

  methods: {
    clique() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
