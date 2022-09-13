<template>
    <ul>
        <hall-card
        v-for="message in messageGroup"
        :key="message.id"
        :id="message.id"
        :alt-name="message.name.english"
        :group-name="message.name.chinese"
        :img="message.img"
        ></hall-card>
    </ul>
</template>

<script>
import HallCard from '../components/Message/HallCard.vue'
import { computed } from 'vue'
import { useIndexStore } from '@/store/index.js'

export default {
    components:{
        HallCard
    },
    setup(){
        const indxeStore = useIndexStore()
        const messageGroup = computed(()=>{
            return indxeStore.allMessage
        })
        return{
           messageGroup 
        }
    }
}
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