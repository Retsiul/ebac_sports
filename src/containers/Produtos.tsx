import Produto from '../components/Produto'
import { useGetFavoritosQuery } from '../service/api'
import * as S from './styles'
const ProdutosComponent = () => {
  const { data: favoritos, isLoading, error } = useGetFavoritosQuery()
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos</p>
  return (
    <S.Produtos>
      {favoritos?.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}
export default ProdutosComponent
