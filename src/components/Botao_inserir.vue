<template>
    <button class="inline_block botao_inserir" v-if="seen" v-on:click="clique">
        Inserir senha
    </button>
</template>

<script>
export default {
    name: 'botao_inserir',

    data: function () {
        return {
            seen: true
        }
    },

    methods: {
        clique: function() {
            this.$emit( 'click' )
        }
    }
}
</script>

<style>

</style>