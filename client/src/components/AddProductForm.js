import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export const AddProductForm = ({ submit }) => {
    return (
        <Formik initialValues={{
            title: '',
            description: '',
            params: {
                price: '',
                availability: true
            }
        }}
            onSubmit={submit}>
            <Wrapper>
                <Form>
                    <Div>
                        <label>Название</label>
                        <Field name='title' type='text' />
                    </Div>

                    <Div>
                        <label>Описание</label>
                        <Field name='description' type='text' />
                    </Div>

                    <Div>
                        <label>Цена</label>
                        <Field name='params.price' type='number' />
                    </Div>


                    <button type='submit'>Сохранить</button>
                </Form>
            </Wrapper>
        </Formik>
    )
}