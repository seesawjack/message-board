<template>
    <message-form :editMsg="editContent"></message-form>
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
            editContent:'',
            editIndex:0,
        }
	},
    provide(){
        return{
            resourse:this.storedResources,
            addMessage:this.addMessage,
            deleteMessage:this.deleteMessage,
            getEditMessage:this.getEditMessage,
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
            sessionStorage.setItem('message',JSON.stringify(this.storedResources));
        },
        deleteMessage(index){
            this.storedResources.splice(index,1)
        },
        getEditMessage(index){
            this.editContent= this.storedResources[index].content
            this.editIndex = index 
        },
        editMessage(editTitle){
            this.storedResources[this.editIndex].title = editTitle;
            this.storedResources[this.editIndex].isEdit = true;
            this.editContent = ''
            this.editIndex = 0
            console.log('編輯')
        }

    }
}
</script>