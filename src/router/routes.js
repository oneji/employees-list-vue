// Pages
import Login from '@/views/Login'
import Home from '@/views/Home'

const routes = [
    { path: '/login', name: 'login', component: Login, meta: { requiresAuth: false } },
    { path: '/', name: 'home', component: Home, meta: { requiresAuth: true } },
]

export default routes