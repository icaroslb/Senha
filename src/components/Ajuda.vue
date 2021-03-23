<template>
    <div class="caixa">
        <ajuda_respo :cor="cor_1"></ajuda_respo>
        <ajuda_respo :cor="cor_2"></ajuda_respo>
        <ajuda_respo :cor="cor_3"></ajuda_respo>
        <ajuda_respo :cor="cor_4"></ajuda_respo>
    </div>
</template>

<script>
import ajuda_respo from './Ajuda_respo.vue'

export default {
    name: 'ajuda',

    components: { ajuda_respo },
    
    props: [ 'cor_1', 'cor_2', 'cor_3', 'cor_4' ],
}
</script>

<style>

</style>