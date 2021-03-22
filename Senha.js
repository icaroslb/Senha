Vue.component( 'circulo', {
    methods: {
        clique: function () {
            this.$emit( 'click' )
        }
    },

    template:
    '                                                 \
    <div class="circulo" v-on:click="clique()"></div> \
    '
})

Vue.component( 'botao_cor', { 
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

    template:
    '                                                                                              \
    <div class="botao">                                                                            \
        <circulo class="acionador" :class="cor" :cor_pai="cor" v-on:click="troca_cor()"></circulo> \
    </div>                                                                                         \
    '
})

Vue.component( 'btn_inserir', {
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
    },

    template:
    '                                                                                      \
    <button class="inline_block botao_inserir" v-if="seen" v-on:click="conferir_resposta"> \
        Inserir senha                                                                      \
    </button>                                                                              \
    '
})

Vue.component( 'ajuda_respo', {
    props: [ 'cor' ],

    template:
    '                                    \
    <div class="caixa_metade">           \
        <circulo :class="cor"></circulo> \
    </div>                               \
    '
})

Vue.component( 'ajuda', {
    props: [ 'cor_1', 'cor_2', 'cor_3', 'cor_4' ],

    template:
    '                                            \
    <div class="caixa">                          \
        <ajuda_respo :cor="cor_1"></ajuda_respo> \
        <ajuda_respo :cor="cor_2"></ajuda_respo> \
        <ajuda_respo :cor="cor_3"></ajuda_respo> \
        <ajuda_respo :cor="cor_4"></ajuda_respo> \
    </div>                                       \
    '
})

Vue.component( 'caixa_botao', {
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

    template:
    '                                                                                       \
    <div>                                                                                   \
        <ajuda :cor_1="ajuda_1" :cor_2="ajuda_2" :cor_3="ajuda_3" :cor_4="ajuda_4"></ajuda> \
        <div class="inline_block">                                                          \
            <botao_cor class="inline_block" :cor=cor_1></botao_cor>                         \
            <botao_cor class="inline_block" :cor=cor_2></botao_cor>                         \
            <botao_cor class="inline_block" :cor=cor_3></botao_cor>                         \
            <botao_cor class="inline_block" :cor=cor_4></botao_cor>                         \
        </div>                                                                              \
        <div class="inline_block inserir_senha">                                            \
            <btn_inserir>                                                                   \
            </btn_inserir>                                                                  \
        </div>                                                                              \
    </div>                                                                                  \
    '
} )


function num_randomico ( min, max )
{
    return Math.floor( Math.random() * ( max - min ) + min )
}

function cor( num )
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

class Jogo_senha {
    constructor ()
    {
        if ( !Jogo_senha.instance ) {
            Jogo_senha.instance = this

            this.mesa = document.getElementById( 'mesa' )
            this.reiniciar()
        }

        return Jogo_senha.instance
    }

    adicionar_nova_senha ( cor_1, cor_2, cor_3, cor_4 )
    {
        let novo_id = "campo_" + this.campos.length
        this.mesa.innerHTML += '<caixa_botao id=' + novo_id + '></caixa_botao>'
        
        let novo_campo = new Vue({ el: '#' + novo_id })
        this.campos.push( novo_campo )

        /*novo_campo.cor_1 = cor_1
        novo_campo.cor_2 = cor_2
        novo_campo.cor_3 = cor_3
        novo_campo.cor_4 = cor_4*/

        //console.log( novo_campo.cor_1 + ' - ' + novo_campo.cor_2 + ' - ' + novo_campo.cor_3 + ' - ' + novo_campo.cor_4 )
    }

    reiniciar ()
    {
        this.campos = []
        this.acertou = false

        let indices = [ 0, 1, 2, 3, 4, 5, 6 ]
        let num_gerado
        this.senha_gerada = [];

        for ( let i = 0; i < 4; i++ ) {
            num_gerado = num_randomico( 0, ( 7 - i ) )
            this.senha_gerada.push( cor( indices[ num_gerado ] ) )
            indices[ num_gerado ] = indices[ indices.length - 1 ]
            indices.pop()
        }

        this.adicionar_nova_senha( "default", "default", "default", "default" )
    }
}

let teste = new Jogo_senha()
console.log( teste.senha_gerada )

/*let campo_1 = new Vue({
    el: '#campo_1'
})

let campo_2 = new Vue({
    el: '#campo_2'
})*/