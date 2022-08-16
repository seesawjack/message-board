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
            storedResources:[],
            pageId:this.$route.params.boardId
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
                id:this.$uuid.v1(),
                pageId:this.pageId,
                time:time,
                content:content,
            }
            this.storedResources.unshift(newResource);
            localStorage.setItem('message'+this.pageId,JSON.stringify(this.storedResources))
        },
        deleteMessage(index){
            this.storedResources.splice(index,1)
            localStorage.setItem('message'+this.pageId,JSON.stringify(this.storedResources))
        },
        editMessage(content,id){
            this.storedResources.filter(item=> 
            item.id === id ? item.content = content:''
           )
           console.log(this.storedResources)
           localStorage.setItem('message'+this.pageId,JSON.stringify(this.storedResources))
        }

    }
}
</script>