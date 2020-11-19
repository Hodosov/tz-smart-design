import React from 'react'
import { Formik, Form, Field } from 'formik'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormComponent = ({ submit }) => {
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
                    <label>Название</label>
                    <Field name='title' type='text' />

                    <label>Описание</label>
                    <Field name='description' type='text' />

                    <label>Цена</label>
                    <Field name='params.price' type='number' />

                    <button type='submit'>Сохранить</button>
                </Form>
            </Wrapper>
        </Formik>
    )
}