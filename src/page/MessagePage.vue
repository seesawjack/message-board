<template>
    <message-form></message-form>
    <ul>
        <message-card></message-card>
    </ul>
    
</template>

<script>
import MessageForm from '../components/Message/MessageForm.vue'
import MessageCard from '../components/Message/MessageCard.vue'
export default{
    components:{
        MessageForm,
        MessageCard
    }
}

</script>