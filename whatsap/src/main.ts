import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { createRouter ,  createWebHistory ,RouteRecordRaw } from 'vue-router';
import Login from "./pages/Login.vue";
import Registration from './pages/Registration.vue';
import Application from './pages/Application.vue';
import { account } from './api';
// const routes:RouteRecordRaw[] = [
//     ,
// ];

const router = createRouter({history :  createWebHistory(),routes:[
    {path:"/login", component:Login , name:"login"},
    {path:"/register", component:Registration , name:"registration"},
    {path:"/application", component:Application , name:"application"},
]})

const accountRoutes = ["login","registration"];

router.beforeEach(async (to,from,next) => {
    const name = to.name as string;

    try{
        const session = await account.getSession("current")
        to.meta.session =session;

        if(accountRoutes.includes(name)){
            return next({name : "application"});
        }

    }catch{
          if(!accountRoutes.includes(name)){
            return next({name : "login"});
          }
    }

    next();
})

createApp(App).use(router).mount('#app')
