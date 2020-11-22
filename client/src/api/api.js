import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

export const productApi = {
    async getAllProducts(filter) {
        const { data } = await instance.get("/product", {
            params: {
                filter,
            }
        })
        return data
    },
    createProduct(value) {
        return instance.post("/product", value)
    }
}