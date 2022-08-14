<template>
    <message-form :editValue="editContent"></message-form>
    <ul>
        <message-card></message-card>
    </ul>
    
</template>

<script>
import MessageForm from '../components/AddMessage/MessageForm.vue'
import MessageCard from '../components/AddMessage/MessageCard.vue'

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
            addMessage:this.addMessage,
            resourse:this.storedResources,
            deleteMessage:this.deleteMessage,
            getEditMessage:this.getEditMessage,
            editMessage:this.editMessage,
            isEditValue :this.editContent
        }
    },
    methods:{
        addMessage(title){
            const week = ['日','一','二','三','四','五','六']
            const time = `${new Date().getFullYear()}/
            ${new Date().getMonth()+1}/
            ${new Date().getDate()}(${week[new Date().getDay()]}) 
            ${new Date().getHours()}:${new Date().getMinutes()}`;

            const newResource = {
                id:new Date().toISOString(),
                time:time,
                title:title,
                isEdit:true
            }

            this.storedResources.push(newResource);
            sessionStorage.setItem('message',JSON.stringify(this.storedResources));
        },
        deleteMessage(index){
            this.storedResources.splice(index,1)
        },
        getEditMessage(index){
            this.editContent= this.storedResources[index].title
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