<template>
    <div>
        <ajuda :cor_1="ajuda_1" :cor_2="ajuda_2" :cor_3="ajuda_3" :cor_4="ajuda_4"></ajuda>
        <div class="inline_block"> 
            <botao_cor class="inline_block" :cor=cor_1 v-on:click="mudar_cor_1"></botao_cor>
            <botao_cor class="inline_block" :cor=cor_2 v-on:click="mudar_cor_2"></botao_cor>
            <botao_cor class="inline_block" :cor=cor_3 v-on:click="mudar_cor_3"></botao_cor>
            <botao_cor class="inline_block" :cor=cor_4 v-on:click="mudar_cor_4"></botao_cor>
        </div>
        <div class="inline_block inserir_senha"> 
            <botao_inserir v-on:click="conferir_resposta">
            </botao_inserir>
        </div>
    </div>
</template>

<script>
import ajuda from "./Ajuda.vue"
import botao_cor from './Botao_cor.vue'
import botao_inserir from './Botao_inserir.vue'

export default {
    name: 'caixa_botao',

    data: function () {
        return {
            atualiza: true,
            ajuda_1: "default",
            ajuda_2: "default",
            ajuda_3: "default",
            ajuda_4: "default",
            
            num_cor_1: -1,
            num_cor_2: -1,
            num_cor_3: -1,
            num_cor_4: -1,

            cor_1: "default",
            cor_2: "default",
            cor_3: "default",
            cor_4: "default",
        }
    },

    components: { ajuda, botao_cor, botao_inserir },

    methods: {
        mudar_cor_1: function () { 
            this.num_cor_1 = ( this.num_cor_1 + 1 ) % 7
            this.cor_1 = num_cor( this.num_cor_1 )
        },

        mudar_cor_2: function () { 
            this.num_cor_2 = ( this.num_cor_2 + 1 ) % 7
            this.cor_2 = num_cor( this.num_cor_2 )
        },

        mudar_cor_3: function () { 
            this.num_cor_3 = ( this.num_cor_3 + 1 ) % 7
            this.cor_3 = num_cor( this.num_cor_3 )
        },

        mudar_cor_4: function () { 
            this.num_cor_4 = ( this.num_cor_4 + 1 ) % 7
            this.cor_4 = num_cor( this.num_cor_4 )
        },

        conferir_resposta: function () {
            this.$emit( 'conferir_resposta' )
        }
    }
}

function num_cor ( num )
{
  switch ( num ) {
    case 0: return 'amarelo'
    case 1: return 'azul'
    case 2: return 'vermelho'
    case 3: return 'verde'
    case 4: return 'rosa'
    case 5: return 'roxo'
    case 6: return 'laranja'
  }
}
</script>

<style></style>