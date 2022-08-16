<template>
    <message-form></message-form>
    <ul>
        <message-card></message-card>
    </ul>
    
</template>

<script>
import MessageForm from '../components/Message/MessageForm.vue'
import MessageCard from '../components/Message/MessageCard.vue'

var moment = require('moment');
moment.locale('zh-tw');


export default {
    components:{
        MessageForm,
        MessageCard,
    },
    data(){
        return{
            storedResources:[]
        }
	},
    provide(){
        return{
            resourse:this.storedResources,
            addMessage:this.addMessage,
            deleteMessage:this.deleteMessage,
            editMessage:this.editMessage,
        }
    },
    methods:{
        addMessage(content){
            const time = moment().format('LLLL')
            const newResource = {
                pageId:this.pageIs,
                id:this.$uuid.v1(),
                time:time,
                content:content,
            }

            fetch('https://message-board-3245b-default-rtdb.firebaseio.com/message-board-'+this.$route.params.boardId+'.json',{
                method:'POST',
                headers:{
                'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    pageId:this.$route.params.boardId,
                    id:this.$uuid.v1(),
                    time:time,
                    content:content,
                })
            })
            .then((response)=>{
                if(response.ok){
                    console.log('狀態正常')
                }else{
                    throw new Error("無法發送資料")
                }
            })
            .catch((error)=>{
                console.log(error);
                this.error=error.message;
            })
            this.storedResources.push(newResource);
        },
        deleteMessage(index){
            this.storedResources.splice(index,1)
        },
        // editMessage(content,id){
        //    this.storedResources.filter(item=> 
        //     item.id === id ? item.content = content:''
        //    )
        // }
    }
}
</script>