<template>
    <h1>歡迎來到留言板</h1>
    <div class="center-link">
        <router-link to="/hall">點我進入</router-link>
    </div>  
</template>

<script>
// import { useStore } from '@/store/pinia'
// // import { storeToRefs } from 'pinia';

// export default {
//     setup() {
//         const store = useStore() 
//     //    const { isAuth } = storeToRefs(store)
//         const logIn = ()=>{
//             store.logIn()
//         }
//         const logOut = ()=>{
//             store.logOut()
//         }
//        return{
//             // isAuth,
//             store,
//             logIn,
//             logOut
//        }
//     },
// }
</script>

<style scoped>
h1{
    color: #fff;
    text-align: center;
    font-size: 2rem;
}
.center-link{
    display: flex;
    justify-content: center;
}
a{
    color: #fff;
    text-decoration: none;
    background-color: rgb(38, 152, 152);
    padding: 20px;
    border-radius: 25px;
}
p{
    color:#fff;
    font-size: 2rem;
}
</style>