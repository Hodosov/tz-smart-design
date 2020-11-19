import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { productApi } from '../api/api'
import styled from 'styled-components'
import { FilterTitle } from './filtersComponents/FilterTitle'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const FilterProduct = () => {
    const [product, setProduct] = useState([])
    const [title, setTitle] = useState('')

    const titles = useMemo(() => [...new Set(product.map(n => n.title))], [product]);

    useEffect(() => {
        productApi.getAllProducts().then(res => {
            setProduct(res)
        })
    }, [setProduct])

    const onChangeTitle = (value) => {
        setTitle(value)
    }

    const allProducts = product.filter(n => (!title || n.title === title))

    return (
        <div>
            <h1>Фильтр по товарам</h1>

            <FilterTitle onChangeTitle={onChangeTitle} titles={titles} />

            <Link to={'/products'}>Добавить товар</Link>

            <Wrapper>
                {allProducts.map((el, i) => <ProductCard data={el} key={i} />)}
            </Wrapper>
        </div>
    )
}