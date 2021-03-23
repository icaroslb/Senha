<template>
  <div id='app'></div>
</template>

<script>
  import Vue from 'vue/dist/vue.js'
  import caixa_botao from './components/Caixa_botao.vue'

  export default {
    name: 'app',
    components: { caixa_botao }
  }

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

          this.mesa = document.getElementById( 'app' )
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

        novo_campo.cor_1 = cor_1
        novo_campo.cor_2 = cor_2
        novo_campo.cor_3 = cor_3
        novo_campo.cor_4 = cor_4

        console.log( novo_campo )
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

  new Jogo_senha()
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
