import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'
const Header = () => {
  const favoritos = useSelector(
    (estado: RootReducer) => estado.favoritos.itensFav
  )
  const itens = useSelector((estado: RootReducer) => estado.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)
  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="cesta" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}
export default Header
