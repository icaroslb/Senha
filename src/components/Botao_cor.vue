<template>
    <div class="botao">
        <circulo class="acionador" :class="cor" :cor_pai="cor" v-on:click="troca_cor()"></circulo>
    </div> 
</template>

<script>
import circulo from './Circulo.vue'

export default {
    name: 'botao_cor',

    components: { circulo },

    props: [ 'cor' ],

    data: function () {
        return {
            cor_pai: this.cor
        }
    },

    methods: {
        troca_cor: function () {
            if ( this.$parent.$data.atualiza ) {
                switch ( this.$parent.$data[ this.cor_pai ] ) {
                    case 'amarelo':  this.$parent.$data[ this.cor_pai ] = 'azul';      break;
                    case 'azul':     this.$parent.$data[ this.cor_pai ] = 'vermelho';  break;
                    case 'vermelho': this.$parent.$data[ this.cor_pai ] = 'verde';     break;
                    case 'verde':    this.$parent.$data[ this.cor_pai ] = 'rosa';      break;
                    case 'rosa':     this.$parent.$data[ this.cor_pai ] = 'roxo';      break;
                    case 'roxo':     this.$parent.$data[ this.cor_pai ] = 'laranja';   break;
                    case 'laranja':  this.$parent.$data[ this.cor_pai ] = 'amarelo';   break;
                    default:         this.$parent.$data[ this.cor_pai ] = 'amarelo';
                }
            }
        }
    },
}
</script>

<style>

</style>