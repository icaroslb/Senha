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

<style>
.circulo {
  width: 100%;
  height: 100%;

  display: inline-block;

  border-radius: 100%;
  border: solid black 1px;

  padding: -1px;

  background-color: #d3a05f;
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
  background-color: #d3a05f;
}

.preto {
  background-color: black;
}

.branco {
  background-color: white;
}
</style>
