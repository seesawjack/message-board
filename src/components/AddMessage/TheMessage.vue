<template>
    <message-form :editValue="editContent"></message-form>
    <ul>
        <message-card></message-card>
    </ul>
    
</template>

<script>
import MessageForm from './MessageForm.vue'
import MessageCard from '../UI/MessageCard.vue'

export default {
    props:['editValue'],
   components:{
    MessageForm,
    MessageCard,
   }
}
</script>