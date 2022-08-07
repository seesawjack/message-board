<template>
		<li v-for="(item,index) in resourse" :key="index">
			<div class="card-header">
                <p class="name">名稱：無名氏</p>
                <p>發文時間：{{item.time}}</p>
            </div>
            <div class="card-body">
                <span>{{item.title}}</span>
            </div>
            <button>編輯</button>
			<button @click="deleteM(index)">刪除</button>
		</li>
        <h2 v-if="resourse.length === 0">此處沒有留言...</h2>
</template>

<script>
export default {
    inject:['resourse','deleteMessage'],
    methods:{
        deleteM(index){
            this.deleteMessage(index)
        }
    },
    beforeMount(){
        // if(sessionStorage.getItem('message')){
        //     console.log(JSON.parse(sessionStorage.getItem('message')))
        //     this.resourse = JSON.parse(sessionStorage.getItem('message'))
          
        // }
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



</style>