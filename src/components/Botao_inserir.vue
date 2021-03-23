<template>
    <button class="inline_block botao_inserir" v-if="seen" v-on:click="conferir_resposta">
        Inserir senha
    </button>
</template>

<script>
import Jogo_senha from './components/Jogo_senha'

export default {
    name: 'botao_inserir',

    data: function () {
        return {
            seen: true
        }
    },

    methods: {
            conferir_resposta: function() {
                let dados = new Jogo_senha()
                let acertou = true

                let ajuda_1 = 'default'
                let ajuda_2 = 'default'
                let ajuda_3 = 'default'
                let ajuda_4 = 'default'

                let cor_1 = this.$parent.$data.cor_1
                let cor_2 = this.$parent.$data.cor_2
                let cor_3 = this.$parent.$data.cor_3
                let cor_4 = this.$parent.$data.cor_4

                if ( cor_1 === dados.senha_gerada[0] ) {
                    ajuda_1 = 'preto'
                } else {
                    if ( cor_1 === dados.senha_gerada[1]
                    ||   cor_1 === dados.senha_gerada[2]
                    ||   cor_1 === dados.senha_gerada[3] )
                        ajuda_1 = 'branco'

                    acertou = false
                }

                if ( cor_2 === dados.senha_gerada[1] ) {
                    ajuda_2 = 'preto'
                } else {
                    if ( cor_2 === dados.senha_gerada[0]
                    ||   cor_2 === dados.senha_gerada[2]
                    ||   cor_2 === dados.senha_gerada[3] )
                        ajuda_2 = 'branco'

                    acertou = false
                }

                if ( cor_3 === dados.senha_gerada[2] ) {
                    ajuda_3 = 'preto'
                } else {
                    if ( cor_3 === dados.senha_gerada[0]
                    ||   cor_3 === dados.senha_gerada[1]
                    ||   cor_3 === dados.senha_gerada[3] )
                        ajuda_3 = 'branco'

                    acertou = false
                }

                if ( cor_4 === dados.senha_gerada[3]  ) {
                    ajuda_4 = 'preto'
                } else {
                    if ( cor_4 === dados.senha_gerada[0]
                    ||   cor_4 === dados.senha_gerada[1]
                    ||   cor_4 === dados.senha_gerada[2] )
                        ajuda_4 = 'branco'

                    acertou = false
                }

                if ( acertou ) {
                    console.log( "Você ganhou o jogo! :)" )
                } else {
                    console.log( "Ainda não! :(" )
                    dados.adicionar_nova_senha( cor_1, cor_2, cor_3, cor_4 )
                }

                this.$parent.$data.ajuda_1 = ajuda_1
                this.$parent.$data.ajuda_2 = ajuda_2
                this.$parent.$data.ajuda_3 = ajuda_3
                this.$parent.$data.ajuda_4 = ajuda_4

                console.log( this.$parent.$data.ajuda_1 + ' - ' + this.$parent.$data.ajuda_2 + ' - ' + this.$parent.$data.ajuda_3 + ' - ' + this.$parent.$data.ajuda_4 )

                this.$parent.$data.atualiza = false
                this.seen = false
            }
        }
}
</script>

<style>

</style>