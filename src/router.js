import { createRouter,createWebHistory } from 'vue-router';

// import MessageForm from './components/AddMessage/MessageForm.vue';
import TheIndex from './components/layouts/TheIndex.vue';
import TheMessage from './components/AddMessage/TheMessage.vue';
import NotFound from './components/layouts/NotFound.vue';
import MessageHall from './components/layouts/MessageHall.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
          path:'/',redirect:'/index'  
        },
        {
            name:'index',
            path:'/index',
            meta:{needsAuth:true},
            components:{
                default:TheIndex
            }
        },
        {
            name:'hall',
            path:'/hall',
            meta:{needsAuth:true},
            components:{
                default:MessageHall
            }
        }, 
        {
            name:'board',
            path:'/board',
            meta:{needsAuth:true},
            components:{
                default:TheMessage
            }
        },
        {
            path:'/:notFound(.*)',component:NotFound
        } 
    ]
})

export default router;