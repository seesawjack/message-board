<template>
    <message-form :editValue="firstEdit"></message-form>
    <ul>
        <message-card></message-card>
    </ul>
    
</template>

<script>
import MessageForm from './MessageForm.vue'
import MessageCard from '../UI/MessageCard.vue'

export default {
    props:['firstEdit'],
   components:{
    MessageForm,
    MessageCard,
   }
}
</script>