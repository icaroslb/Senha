import Vue from 'vue/dist/vue'

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

export default Jogo_senha