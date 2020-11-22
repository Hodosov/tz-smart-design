import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AddProductForm } from '../components/AddProductForm'
import { productApi } from '../api/api'
import { Title } from '../components/Title'
import { AddedProduct } from '../components/AddedProduct'

export const AddProductPage = () => {

    const [isAdd, setIsAdd] = useState(false)

    const submit = (value) => {
        console.log(value)
        productApi.createProduct(value)
        setIsAdd(true)
    }

    return (
        <div>
            <Title title="Добавьте товар" />
            <Link to={'/'}>Поиск товара</Link>
            {isAdd 
            ? <AddedProduct setIsAdd={setIsAdd} />
                : <AddProductForm submit={submit}  />
            }
        </div>
    )
}