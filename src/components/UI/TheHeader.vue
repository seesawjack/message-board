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
export default {
    data(){
        return{
            page:{
                board1:'八卦板',
                board2:'西洽板',
                board3:'電影板'
            },
            pageTitle:'',
            havePageTitle:false
        }
    },
    watch:{
        '$route.params.boardId':function(){
            this.pageTitle = this.page[this.$route.params.boardId];
        },
    },
    methods:{
        logIn(){
            this.$store.commit('logIn')
        },
        logOut(){
            this.$store.commit('logOut')
        }
    },
    computed:{
        isAuth(){
            return  this.$store.getters.isAuth
        }
    } 
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