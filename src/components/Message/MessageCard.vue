<template>
    <base-dialog 
        v-if="isShow"
        title="修改內容"
        @close="check"
        >
        <template #default>
            <textarea  cols="30" rows="10" v-model="editInput"></textarea>
        </template>
        
    </base-dialog>
    <li v-for="(item,index) in messages" :key="index">
        <div class="card-header">
            <p class="name">名稱：無名氏</p>
            <p>發文時間：{{item.time}}</p>
        </div>
        <div class="card-body">
            <span>{{item.content}}</span>
        </div>
        <button class="edit-btn" @click="editMsg(item.id)">編輯</button>
        <button class="delete-btn" @click="deleteMsg(index)">刪除</button>
    </li>
    <div class="return-btn" v-if="resourse.length === 0">
        <h2 >此處沒有留言...</h2>
        <router-link to="../">返回</router-link>
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
    computed:{
        messages(){
            return this.$store.state.storedResources
        },
        editInput:{
            get(){
                return this.$store.getters.editInput
            },
            set(value){
                this.$store.commit('storeEditMessage',{content:value})
            }
        }
    },
    methods:{
        deleteMsg(index){
            this.deleteMessage(index)
        },
        // editMsg(item){
        //     this.isShow = true
        //     this.editingMsg = item.content
        //     this.editId = item.id
        // },
        editMsg(id){
            this.isShow = true
            this.$store.commit('editMsg',{id:id})
        },
        check(){
            this.isShow = false
            if(confirm('你確定送出訊息嗎？')){
            //    this.editMessage(this.editingMsg,this.editId)
            this.$store.commit('check')
            }
        },
        getData(){
           let data = JSON.parse(localStorage.getItem('message'+this.$route.params.boardId));
           if(data){
                let boardData = data.filter(item => item.pageId === this.$route.params.boardId)
                for(let msg of boardData){
                    this.resourse.push(msg)
                }
           }
          
        }
    },
     mounted(){
        this.getData()
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