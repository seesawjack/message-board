<template>
    <header>
        <h1>{{pageTitle? pageTitle :'留言板'}}</h1>
        <!-- <div class="btn" v-if="havePageTitle">
            <router-link  to="../">
                <div class="btn-style">◀</div>
            </router-link>
        </div> -->
        <div class="btn">
            <button v-if="!isAuth" @click="logIn()" class="login logbtn">登入</button>
            <button v-else @click="logOut()" class="logout logbtn">登出</button>
        </div>
    </header>
</template>

<script>
import { ref, reactive ,watch, computed} from 'vue'
import { useRoute } from 'vue-router'
import { useIndexStore } from '@/store/index.js'
export default {
    setup(){
        const route = useRoute()
        // const store = useStore()
        const indexStore = useIndexStore()
        const page = reactive({
            board1:'八卦板',
            board2:'西洽板',
            board3:'電影板'
        })
        const logIn =()=>{
            indexStore.logIn()
        }
        const logOut =()=>{
            indexStore.logOut()
        }
        const isAuth = computed(()=>{
            return  indexStore.isAuth
        })
        
        const pageTitle = ref('')

        watch(()=>route.params.boardId,function(){
            pageTitle.value = page[route.params.boardId];
        }) 
        
        return{
            pageTitle,
            logIn,
            logOut,
            isAuth
        }
    },
}

</script>

<style scoped>
    header{
        position: relative;
        background-color: cadetblue;
        padding: 20px 0px;  
    } 
    h1{
        margin: 0px;
        text-align: center;
        color: #fff;
    }
    a{
        text-decoration: none;
        position: absolute;
        top: 17px;
        left: 10%;
    }
    .btn-style{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 15px;
        font-size: 2rem;
        color: rgb(4, 109, 71);
        box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    } 
    .btn-style:hover{
        background-color: rgb(4, 109, 71);
        color: #fff;
    }
    .btn{
        position: absolute;
        top: 20px;
        right: 10%;
    }
    .logbtn{
        width: 80px;
        height: 50px;
        background-color: #fff;
        border-radius: 15px;
        font-size: 1rem;
        color: rgb(4, 109, 71);
        box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
        border: none;
    }
    .logbtn:hover{
        cursor: pointer;
    }
    .logout{
        background-color:  rgb(4, 109, 71); 
         color:#fff;
    }
</style>