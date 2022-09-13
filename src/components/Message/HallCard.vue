<template>
    <li>
        <div class="message-group">
            <img :src="require(`@/assets/images/${img}`)" alt="">
            <p>{{groupName}}</p>
            <router-link :to="boardLink">點我進入</router-link>
        </div>
    </li>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['groupName','altName','id','img'],
    setup(props){
        const boardLink = computed(()=>{
            return {
                name:'board',
                params:{boardId:props.id}
            }
        })
        return{
            boardLink
        }
    }
}
</script>

<style scoped lang="scss">
    li:not(:last-child){
        margin-bottom: 20px;
    }
    .message-group{
        max-width: 500px;
        box-shadow: 0 0px 8px rgb(146 217 173 / 75%);
        border-radius: 25px;
        background-color: #fff;
        text-align: center;
        padding-bottom: 30px;
        img{
            max-width: 300px;
            border-radius: 25px 25px 0px 0px;
        }
        p{
            margin: 20px 0px;
        }
        a{
             color: #fff;
            text-decoration: none;
            background-color: rgb(38, 152, 152);
            padding: 10px 40px;
            border-radius: 25px;
        }
        .color{
            width:300px;    
            height:120px;
            border-radius: 25px 25px 0px 0px;
            &.green{
                background:green;
            }
            &.red{
                 background:red;
            }
            &.blue{
                 background:blue;
            }
        }
    }
</style>