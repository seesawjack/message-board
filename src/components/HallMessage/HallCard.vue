<template>
    <router-view></router-view>
    <li>
        <div class="message-group">
            <img :src="require(`@/assets/images/${imgLink}`)" :alt="altName" :title="altName">
            <p>{{groupName}}</p>
            <router-link :to="`hall/${this.id}`">點我進入</router-link>
        </div>
    </li>
</template>

<script>
export default {
    props:['groupName','altName','imgLink','id'],
    computed:{
        teamMembersLink(){
        // return '/teams/'+this.id
        return {
            name:'group',
            params:{groupId:this.id}
            }
        }
    }
}
</script>

<style scoped lang="scss">
    li:not(:last-child){
        margin-bottom: 20px;
    }
    .message-group{
        max-width: 500px;
        box-shadow: 0 0px 8px rgb(146 217 173 / 75%);
        border-radius: 25px;
        background-color: #fff;
        text-align: center;
        padding-bottom: 30px;
        img{
            max-width: 300px;
            border-radius: 25px 25px 0px 0px;
        }
        p{
            margin: 0px;
            margin-top: 20px;
        }
    }
</style>