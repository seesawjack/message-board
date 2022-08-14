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
                time:time,
                content:content,
                isEdit:true
            }
            this.storedResources.push(newResource);
        },
        deleteMessage(index){
            this.storedResources.splice(index,1)
        },
        editMessage(content,id){
           this.storedResources.filter(item=> 
            item.id === id ? item.content = content:''
           )
        }

    }
}
</script>