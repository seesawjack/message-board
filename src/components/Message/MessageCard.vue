<template>
    <base-dialog 
        v-if="isShow"
        title="修改內容"
        @close="check"
        >
        <template #default>
            <textarea  cols="30" rows="10" v-model="msgEdit"></textarea>
        </template>
        
    </base-dialog>
    <li v-for="(item,index) in messages" :key="index">
        <div class="card-header">
            <p :class="[{isAuth:isAuth},'name']">名稱：無名氏</p>
            <p>發文時間：{{item.time}}</p>
        </div>
        <div class="card-body">
            <span>{{item.content}}</span>
        </div>
        <button class="edit-btn" @click="editMsg(item.id)">編輯</button>
        <button class="delete-btn" @click="deleteMsg(index)">刪除</button>
    </li>
    <div class="return-btn" v-if="messages.length === 0">
        <h2>此處沒有留言...</h2>
        <button @click="backBtn">返回</button>
    </div>
        
</template>

<script>
import { ref,computed } from 'vue'
import { useIndexStore } from '@/store/index.js'
import { useCardStore } from '@/store/modules/card/index.js'
import { useFormStore } from '@/store/modules/form/index.js'
import { useRouter } from'vue-router';
export default {
    setup(){
        const router = useRouter()
        const isShow = ref(false)
        const indexStore = useIndexStore()
        const cardStore = useCardStore()
        const formStore = useFormStore()
        const messages = computed(()=>{
             return indexStore.resources
        })

        const msgEdit = computed({
            get(){
                return cardStore.msgEdit
            },
            set(value){
               cardStore.storeEditMsg(value)
            }
        })
        const editMsg = (id)=>{
            isShow.value = true
            cardStore.editMsg(id)
        }
        const check = ()=>{
            isShow.value = false
            if(confirm('你確定送出訊息嗎？')){
                cardStore.sendMsg()
            }
        }
        const deleteMsg = (index)=>{
            cardStore.deleteMsg(index)
        }
        const isAuth = computed(()=>{
            return indexStore.isAuthIn
        })
        const backBtn = function(){
           if(formStore.isMsg){
            alert('你還有訊息未送出');
            return;
           }
            router.push('/')
        }
        return{
            isShow,
            messages,
            msgEdit,
            deleteMsg,
            editMsg,
            check,
            isAuth,
            backBtn
        }
    }
}
</script>

<style scoped lang="scss">
li{
    width: 500px;
    padding: 20px;
    box-shadow: 0 0px 8px rgb(146 217 173 / 75%);
    border-radius: 25px;
    background-color: #fff;
    &:not(:last-child){
        margin-bottom: 25px;
    }
}
.card-header{
    display: flex;
    p{
        margin: 0;
        &.name{
            margin-right: 10px;
            &.isAuth{
                color: rgb(10, 129, 172);
            }
        }
    }
}
h2{
    color: #fff;
    text-align: center;
}
.return-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        color: #fff;
        text-decoration: none;
        background-color: rgb(38, 152, 152);
        padding: 10px 40px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
    }
    
}
textarea{
    width: 100%;
}
.card-body{
    margin: 10px 0px;
}
.edit-btn{
    cursor: pointer;
    background-color: unset;
    border: 1px solid rgb(38, 152, 152);
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 20px;
    &:hover{
        color: #fff;
        background-color: rgb(38, 152, 152);
    }
}
.delete-btn{
    cursor: pointer;
    background-color: unset;
    border: 1px solid rgb(188, 20, 81);
    border-radius: 5px;
    padding: 5px 10px;
    &:hover{
        color: #fff;
        background-color: rgb(188, 20, 81);
    }
}

</style>