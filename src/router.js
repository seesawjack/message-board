import { createRouter,createWebHistory } from 'vue-router';

// import MessageForm from './components/AddMessage/MessageForm.vue';
import TheIndex from './page/IndexPage.vue';
import MessagePage from './page/MessagePage.vue';
import NotFound from './page/NotFound.vue';
import MessageHall from './page/MessageHall.vue';
import TheHeader from './components/UI/TheHeader.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
          path:'/',redirect:'/message-board'  
        },
        {
            name:'index',
            path:'/message-board',
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
            name:'board',
            path:'/hall/:boardId',
            meta:{needsAuth:true},
            components:{
                default:MessagePage,
                header:TheHeader
            }
        }, 
        {
            path:'/:notFound(.*)',component:NotFound
        }, 
    ],
    linkActiveClass:'active',
    scrollBehavior(_,_2,savedPosition){   //避免跟下面的to from 混淆
        // console.log(to,from,savedPosition)
        if(savedPosition){
            return savedPosition
        }
        return{left:0,top:0}
    }
});


export default router;