<template>
  <div class="circulo" v-on:click="clique()"></div>
</template>

<script>
export default {
  name: "circulo",

  methods: {
    clique: function () {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
