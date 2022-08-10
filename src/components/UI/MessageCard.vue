<template>
		<li v-for="(item,index) in resourse" :key="index">
			<div class="card-header">
                <p class="name">名稱：無名氏</p>
                <p>發文時間：{{item.time}}</p>
            </div>
            <div class="card-body">
                <span>{{item.title}}</span>
            </div>
            <button @click="editM(index,item)">編輯</button>
			<button v-if="item.isEdit" @click="deleteM(index)">刪除</button>
		</li>
        <div class="return-btn" v-if="resourse.length === 0">
            <h2 >此處沒有留言...</h2>
            <router-link to="index">返回</router-link>
        </div>
        
</template>

<script>
export default {
    inject:['resourse','deleteMessage','getEditMessage'],
    methods:{
        deleteM(index){
            this.deleteMessage(index)
        },
        editM(index,item){
            this.getEditMessage(index)
            item.isEdit = false
        },
    }
}
</script>

<style scoped lang="scss">
li{
    width: 500px;
    padding: 20px;
    box-shadow: 0 0px 8px rgb(146 217 173 / 75%);
    border-radius: 25px;
    background-color: #fff;
    &:not(:last-child){
        margin-bottom: 25px;
    }
}
.card-header{
    display: flex;
    p{
        margin: 0;
        &.name{
            margin-right: 10px;
        }
    }
}
h2{
    color: #fff;
    text-align: center;
}
.return-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        color: #fff;
        text-decoration: none;
        background-color: rgb(38, 152, 152);
        padding: 10px 40px;
        border-radius: 25px;
    }
    
}


</style>