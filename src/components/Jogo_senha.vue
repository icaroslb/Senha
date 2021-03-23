<template>
  <div id='Jogo_senha'></div>
</template>

<script>
import Vue from 'vue/dist/vue'
import caixa_botao from './Caixa_botao.vue'
import num_cor from './Caixa_botao.vue'

export default {
  name: 'Jogo_senha',
    
  components: { caixa_botao },

  data: function () {
    return {
      senha_gerada: [],
      tentativas: 0,
      campos: [],
      acertou: false
    }
  },

  methods: {
    num_randomico: function ( min, max )
    {
        return Math.floor( Math.random() * ( max - min ) + min )
    },

    adicionar_nova_senha: function ( cor_1, cor_2, cor_3, cor_4 )
    {
      let novo_id = "campo_" + this.campos.length
      document.getElementById( 'Jogo_senha' ).innerHTML += '<caixa_botao id=' + novo_id + 'v-on:conferir_resposta="conferir_resposta"></caixa_botao>'

      let novo_campo = new Vue( { el: '#' + novo_id } )
      this.campos.push( novo_campo )

      novo_campo.cor_1 = cor_1
      novo_campo.cor_2 = cor_2
      novo_campo.cor_3 = cor_3
      novo_campo.cor_4 = cor_4

      console.log( novo_campo )
    },

    created: function ()
    {
      this.campos = []
      this.acertou = false

      let indices = [ 0, 1, 2, 3, 4, 5, 6 ]
      let num_gerado
      this.senha_gerada = [];

      for ( let i = 0; i < 4; i++ ) {
        num_gerado = this.num_randomico( 0, ( 7 - i ) )
        this.senha_gerada.push( num_cor( indices[ num_gerado ] ) )
        indices[ num_gerado ] = indices[ indices.length - 1 ]
        indices.pop()
      }

      console.log( this.senha_gerada )
      //this.adicionar_nova_senha( "default", "default", "default", "default" )
    },

    conferir_resposta: function ()
    {
      let campo = this.campos[ this.campos.length - 1 ]
      let ajuda = [ 'default', 'default', 'default', 'default' ]
      let senha = [ campo.cor_1, campo.cor_2, campo.cor_3, campo.cor_4 ]
      let resposta_certa = true

      for ( let i = 0; i < 4; i++ ) {
        
        if ( senha[ i ] === this.senha_gerada[ i ] ) {
          ajuda[ i ] = 'preto'
        } else {
          resposta_certa = false

          for ( let j = 0; j < 4; j++ ) {
            if ( i != j &&  senha[ i ] === this.senha_gerada[ j ] ) {
              ajuda[ i ] = 'branco'
              break
            }
          }

        }

      }

      campo.ajuda_1 = ajuda[0]
      campo.ajuda_2 = ajuda[1]
      campo.ajuda_3 = ajuda[2]
      campo.ajuda_4 = ajuda[3]

      if ( resposta_certa ) {
        console.log( "Você acertou!!! :)" )
        this.resposta = resposta_certa
      } else {
        console.log( "Ainda não :(" )
        this.adicionar_nova_senha( senha[0], senha[1], senha[2], senha[3] )
      }

      campo.seen = false

    }
  }
}
</script>

<style>
* {
  background-color: peru;
}
    
.botao {
  width: 90px;
  height: 90px;
    
  padding: 10px;
}
    
.caixa {
  width: 90px;
  height: 90px;
  
  display: inline-block;
}
    
.caixa_metade {
  width: 45%;
  height: 45%;
  
  display: inline-block;
  
  padding: 1% 1% 1% 1%
}
    
.circulo {
  width: 100%;
  height: 100%;
      
  display: inline-block;
      
  border-radius: 100%;
  border: solid black 2px;
  
  background-color: #aa6a2c;
}
    
.acionador {
  cursor: pointer;
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
  background-color: #aa6a2c;
}
    
.preto {
  background-color: black;
}
    
.branco {
  background-color: white;
}
    
.inline_block {
  display: inline-block;
}
    
.inserir_senha {
  width: 90px;
  height: 110px;
      
  box-sizing: border-box;
  position: absolute;
  
  margin-left: 15px;
}
    
.botao_inserir {
  overflow: auto;
  margin-top: 36px;
  
  border-radius: 5%;
  border: solid black 2px;
  
  background-color: #aa6a2c;
  
  font-weight: bolder;
  
  cursor: pointer;
}
</style>
