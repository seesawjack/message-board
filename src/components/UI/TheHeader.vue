<template>
    <header>
        <h1>{{pageTitle? pageTitle:'留言板'}}</h1>
        <!-- <div class="btn" v-if="havePageTitle">
            <router-link  to="../">
                <div class="btn-style">◀</div>
            </router-link>
        </div> -->
    </header>
</template>

<script>
import { ref, reactive ,watch,} from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup(){
    const route = useRoute()
    const page = reactive({
        board1:'八卦板',
        board2:'西洽板',
        board3:'電影板'
    })

    let pageTitle = ref('')
    // const havePageTitle = ref('')

    watch(()=>route.params.boardId,function(){
        pageTitle.value = page[route.params.boardId];
    }) 
        return{
            pageTitle
        }
    }
}

</script>

<style scoped>
    header{
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
</style>