<template>
  <div class="rodape campo">
    <p v-if="recomecar" class="inline_block">{{ mensagem }}</p>
    <button
      v-if="recomecar"
      class="botao-infor inline_block"
      v-on:click="reiniciar()"
    >
      Reiniciar
    </button>
    <button class="botao-infor" @click="conferirCampo" v-if="!recomecar">
      Inserir resposta
    </button>
  </div>
</template>

<script>
export default {
  props: ["recomecar", "ganhou"],

  data() {
    return {
      seen: true,
      mensagem: "Você não conseguiu!",
    };
  },

  watch: {
    ganhou: function (ganhar) {
      ganhar
        ? (this.mensagem = "Você acertou!")
        : (this.mensagem = "Você não conseguiu!");
    },
  },

  methods: {
    conferirCampo() {
      this.$emit("conferirCampo");
    },

    reiniciar() {
      this.$emit("reiniciar");
    },
  },
};
</script>

<style>
.rodape {
  background-color: burlywood;

  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;

  border-top: solid black 1px;
}

p {
  padding-right: 10px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  font-weight: bolder;
}
</style>
