import { ProductCard } from './ProductCard'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProductList = ({product}) => {
    return (
        <Wrapper>
            {product.map((el, i) => <ProductCard data={el} key={i} />)}
        </Wrapper>
    )
}