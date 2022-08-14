<template>
    <base-dialog 
        v-if="isShow"
        title="修改內容"
        @close="check"
        >
        <template #default>
            <textarea  cols="30" rows="10" v-model="editingMsg"></textarea>
        </template>
        
    </base-dialog>
    <li v-for="(item,index) in resourse" :key="index">
        <div class="card-header">
            <p class="name">名稱：無名氏</p>
            <p>發文時間：{{item.time}}</p>
        </div>
        <div class="card-body">
            <span>{{item.content}}</span>
        </div>
        <button @click="editMsg(item)">編輯</button>
        <button @click="deleteMsg(index)">刪除</button>
    </li>
    <div class="return-btn" v-if="resourse.length === 0">
        <h2 >此處沒有留言...</h2>
        <router-link to="../index">返回</router-link>
    </div>
        
</template>

<script>
 import BaseDialog from '../UI/BaseDialog.vue'
export default {
    inject:['resourse','deleteMessage','editMessage'],
    components:{
        BaseDialog
    },
    data(){
        return{
            isShow:false,
            editId:''   
        }
    },
    methods:{
        deleteMsg(index){
            this.deleteMessage(index)
        },
        editMsg(item){
            this.isShow = true
            this.editingMsg = item.content
            this.editId = item.id
        },
        check(){
            this.isShow = false
            this.editMessage(this.editingMsg,this.editId)
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
    a{
        color: #fff;
        text-decoration: none;
        background-color: rgb(38, 152, 152);
        padding: 10px 40px;
        border-radius: 25px;
    }
    
}
textarea{
    width: 100%;
}


</style>