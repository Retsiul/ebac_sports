import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
type estadoDoCarrinho = {
  itens: Produto[]
}
const initialState: estadoDoCarrinho = {
  itens: []
}
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (estado, acao: PayloadAction<Produto>) => {
      const compra = acao.payload
      if (estado.itens.find((itemComprado) => itemComprado.id === compra.id)) {
        alert('item já adicionado')
      } else {
        estado.itens.push(compra)
      }
    }
  }
})
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
