import { createRouter,createWebHistory } from 'vue-router';

// import MessageForm from './components/AddMessage/MessageForm.vue';
import TheIndex from './page/IndexPage.vue';
import TheMessage from './page/MessagePage.vue';
import NotFound from './page/NotFound.vue';
import MessageHall from './page/MessageHall.vue';


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
            component:MessageHall,
        },
        {
            name:'hall-single',
            path:'/hall/:groupId',
            meta:{needsAuth:true},
            component:TheMessage
        }, 
        {
            path:'/:notFound(.*)',component:NotFound
        } 
    ]
})

export default router;