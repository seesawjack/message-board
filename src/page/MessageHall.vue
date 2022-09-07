<template>
    <ul>
        <hall-card
        v-for="message in messageGroup"
        :key="message.id"
        :id="message.id"
        :alt-name="message.name.english"
        :group-name="message.name.chinese"
        :color="message.color"
        ></hall-card>
    </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import HallCard from '../components/Message/HallCard.vue'

const store = useStore()
const messageGroup = computed(()=>{
    return store.state.allMessage
})
</script>

<style scoped lang="scss">
ul{
    max-width: 1024px;
    margin: 50px auto;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>