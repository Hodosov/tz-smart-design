import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    width: 300px;
    border: 1px solid #000;
    border-radius: 5px;
`

export const ProductCard = ({ data }) => {
    return (
        <Wrapper>
            <p>Название: {data.title}</p>
            <p>Описание: {data.description}</p>
            <p>Цена: {data.params.price}</p>
        </Wrapper>
    )
}