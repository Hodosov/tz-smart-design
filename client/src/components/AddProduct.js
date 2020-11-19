import React from 'react'
import { Link } from 'react-router-dom'
import { FormComponent } from './FormComponent'
import { productApi } from '../api/api'

export const AddProduct = () => {

    const submit = (value) => {
            productApi.createProduct(null, value)
    }

    return (
        <div>
            <h1>Добавьте товар</h1>
            <Link to={'/'}>Поиск товара</Link>
            <FormComponent submit={submit} />
        </div>
    )
}