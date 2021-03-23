<template>
    <div>
        <ajuda :cor_1="ajuda_1" :cor_2="ajuda_2" :cor_3="ajuda_3" :cor_4="ajuda_4"></ajuda>
        <div class="inline_block"> 
            <botao_cor class="inline_block" :cor=cor_1></botao_cor>
            <botao_cor class="inline_block" :cor=cor_2></botao_cor>
            <botao_cor class="inline_block" :cor=cor_3></botao_cor>
            <botao_cor class="inline_block" :cor=cor_4></botao_cor>
        </div>
        <div class="inline_block inserir_senha"> 
            <botao_inserir>
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

            cor_1: "cor_1",
            cor_2: "cor_2",
            cor_3: "cor_3",
            cor_4: "cor_4",
        }
    },

    components: { ajuda, botao_cor, botao_inserir }
}
</script>

<style></style>