import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const SearchProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/product'
        axios.get(apiUrl).then((resp) => {
            const allProduct = resp.data
            setProduct(allProduct)
            console.log('render')
        });
    }, [setProduct])

    return (
        <div>
            {product.map((el, i) => {
                return (
                    <div key={i}>
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                        <p>{el.params.price}</p>
                    </div>
                )
            })}
        </div>
    )
}