<template>
    <base-dialog 
    v-if="inputIsInvalid"
    title="請輸入內容"
    @close="confirmError"
    >
      <template #default>
        <p>請輸入您想留言的內容</p>
      </template>
      <template #actions></template>
    </base-dialog>
    <!-- 表單輸入 -->
    <form @submit.prevent="submitData()">
		<input type="text" v-model="inputMsg">
		<button>輸入留言</button>
	</form>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue'
export default {
    inject:['addMessage'],
    components:{
        BaseDialog
    },
    data(){
       return{
        inputIsInvalid:false,
       } 
    },
    computed:{
        inputMsg:{
            get(){
                return this.$store.state.inputMsg
            },
            set(value){
                this.$store.commit('storeMessage',{content:value}) 
            }
        }
    },
    methods:{
        submitData(){
        this.$store.commit('addMessage')

        },
        confirmError(){
            this.inputIsInvalid = false;
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
            &.edit{
                background-color: rgb(227, 61, 61);
            }
        }
    }
</style>