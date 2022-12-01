import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CustomersView from '../views/CustomersView.vue'
import SalesView from '../views/SalesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView
        },
        {
            path: '/customers',
            name: 'customers',
            component: CustomersView
        },
        {
            path: '/sales',
            name: 'sales',
            component: SalesView
        }
    ]
})

export default router
