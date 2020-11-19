import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8080/product"
})

export const productApi = {
    getAllProducts() {
        return instance.get().then(res => res.data)
    },
    createProduct(baseURL, value) {
        return instance.post(baseURL, value)
    }
}