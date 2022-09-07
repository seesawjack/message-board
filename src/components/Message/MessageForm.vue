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
		<input type="text" v-model="msgInput">
		<button>輸入留言</button>
	</form>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue'
import {ref,computed} from 'vue'
import { useStore } from 'vuex'
export default {
    components:{
        BaseDialog
    },
    setup(){
        const store = useStore();
        let inputIsInvalid = ref(false)
        let msgInput = ref('')
        msgInput = computed({
            get(){
                return store.state.msgInput
            },
            set(value){
               store.commit('storeInputMsg',{content:value}) 
            }
        })
        const submitData = ()=>{
            msgInput.value? 
            store.commit('addMsg'):
            inputIsInvalid.value = true
        }
        const confirmError = ()=>{
           inputIsInvalid.value = false;
        }
        return{
            inputIsInvalid,
            msgInput,
            submitData,
            confirmError
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