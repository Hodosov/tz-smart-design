import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productApi } from '../api/api'
import { Title } from '../components/Title'
import { ProductList } from '../components/ProductList'

export const FilterProductPage = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        productApi.getAllProducts().then(res => {
            setProduct(res)
        })
    }, [setProduct])

    const onChangeTitle = (value) => {
        productApi.getAllProducts(value).then(res => setProduct(res))
    }

    return (
        <div>
            <Title title ="Фильтр по товарам" />
            <Link to={'/products'}>Добавить товар</Link>
            <input onChange={(e) => onChangeTitle(e.target.value)} />
            <ProductList product={product} />
        </div>
    )
}