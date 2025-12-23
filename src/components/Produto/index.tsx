import { Produto as ProdutoType } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarFav } from '../../store/reducers/favoritos'
import { adicionar } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'
import * as S from './styles'
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )
const ProdutoComponent = ({ produto }: { produto: ProdutoType }) => {
  const dispatch = useDispatch()
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.itensFav
  )
  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(adicionarFav(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}
export default ProdutoComponent
