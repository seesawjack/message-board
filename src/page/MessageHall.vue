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

<script>
import HallCard from '../components/Message/HallCard.vue'
export default {
    components:{
        HallCard
    },
    data(){
        return{
            messageGroup:[
                {
                    id:'board1',
                    name:{
                        english:'gossiping',
                        chinese:'八卦版'
                    },
                    img:'gossiping-bn.png',
                    color:'red'
                },
                {
                    id:'board2',
                    name:{
                        english:'c_chat',
                        chinese:'西洽版'
                    },
                    img:'cchat-bn.png',
                    color:'blue'
                },
                {
                    id:'board3',
                    name:{
                        english:'movie',
                        chinese:'電影版'
                    },
                    img:'movie-bn.png',
                    color:'green'
                }
            ]
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