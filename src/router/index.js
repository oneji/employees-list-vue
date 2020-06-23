import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store/index'

Vue.use(Router)

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('vc_token');

    if (isAuthenticated) {
        if(to.name === 'login') {
            next('/');
        } else {
            store.dispatch('auth/fetchUser').then(() => {
                next();
            });
        }
    } else {
        next()
    }

    if(!isAuthenticated) {
        if(to.meta.requiresAuth) {
            next('/login')
        }

        next();
    }
})

export default router
