import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
type estadoDosFavoritos = {
  itensFav: Produto[]
}
const initialState: estadoDosFavoritos = {
  itensFav: []
}
const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (estado, acao: PayloadAction<Produto>) => {
      const produto = acao.payload
      const existe = estado.itensFav.some((p) => p.id === produto.id)
      if (existe) {
        estado.itensFav = estado.itensFav.filter((p) => p.id !== produto.id)
      } else {
        estado.itensFav.push(produto)
      }
    }
  }
})
export const { adicionarFav } = favoritosSlice.actions
export default favoritosSlice.reducer
// adicionarFav
// favoritosSlice
// produtoFav
// itemf
