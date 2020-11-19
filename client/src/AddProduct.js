import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

export const AddProduct = () => {

    const submit = (value) => {
        const apiUrl = 'http://localhost:8080/product'
        axios.post(apiUrl, value)
        console.log(value)
    }

    return (
        <div>
            <Formik initialValues={{
                title: '',
                description: '',
                params: {
                    price: '',
                    availability: true
                }
            }}
                onSubmit={submit}>
                <Form>
                    <label>Название</label>
                    <Field name='title' type='text' />
                    <label>Описание</label>
                    <Field name='description' type='text' />
                    <label>Цена</label>
                    <Field name='params.price' type='text' />
                    <button type='submit'>Сохранить</button>
                </Form>
            </Formik>
        </div>
    )
}