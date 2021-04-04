<template>
  <div class="container">
    <JogoSenha />
  </div>
</template>

<script>
import JogoSenha from "./components/JogoSenha.vue";

export default {
  name: "App",

  components: { JogoSenha },
};
</script>

<style>
body {
  margin: 0px;
}

.container {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
