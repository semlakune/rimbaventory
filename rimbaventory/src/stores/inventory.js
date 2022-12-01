import {defineStore} from 'pinia'
import axios from 'axios'

export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        baseUrl: 'http://localhost:3000',
        products: [],
        customers: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                const { data } = await axios.get(`${this.baseUrl}/products`)
                this.products = data
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async createProduct(payload) {
            try {
                await axios.post(`${this.baseUrl}/products`, payload)
                await this.fetchProducts()
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`${this.baseUrl}/products/${id}`)
                await this.fetchProducts()
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async fetchCustomers() {
            try {
                const { data } = await axios.get(`${this.baseUrl}/customers`)
                this.customers = data
            } catch (e) {
                console.log(e.response.data)
            }
        }
    }
})
