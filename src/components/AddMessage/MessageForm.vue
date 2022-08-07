<template>
    <form @submit.prevent="submitData()">
		<input type="text" ref="titleInput">
		<button>輸入留言</button>
	</form>
</template>

<script>
export default {
    inject:['addMessage'],
    methods:{
        submitData(){
        const enterMessage = this.$refs.titleInput.value;

        if(enterMessage.trim() === ''){
           console.log('此為空值')
           return; 
        }
        this.addMessage(enterMessage)
        this.$refs.titleInput.value = '';
        }
    }   
}
</script>


<style scoped lang="scss">
    form{
        display: flex;
        
        input{
            width:calc(100% - 116px);
            height: 53px;
            border: none;
            box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
            padding: 0px;
        }
        button{
            background-color: rgb(62, 110, 173);
            color: #fff;
            border: none;
            font-size: 1.5rem;
            padding: 10px;
        }
    }
</style>