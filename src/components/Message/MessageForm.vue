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
		<input type="text" v-model="msgInput" :class="{'invalid':!isValid}" @blur="clearIsValid">
		<button :class="{'invalid':!isValid}" @blur="clearIsValid">輸入留言</button>
	</form>
</template>

<script>
import { ref,computed } from 'vue'
import { useFormStore } from '@/store/modules/form/index.js'

export default {
    setup(){
        const formStore = useFormStore()
        const inputIsInvalid = ref(false)
        const isValid = ref(true)

        const msgInput = computed({
            get(){
                return formStore.msgInput
            },
            set(value){
                formStore.storeInputMsg(value)
            }
        })
        const submitData = ()=>{
            isValid.value = true
            if(msgInput.value){
                formStore.addMsg()
            }else{
                inputIsInvalid.value = true
                isValid.value = false
            }
        } 
        const clearIsValid = ()=>{
            if(msgInput.value){
                isValid.value = true
            }
        }
        const confirmError = ()=>{
            inputIsInvalid.value = false;
        }
        return{
            inputIsInvalid,
            isValid,
            msgInput,
            submitData,
            clearIsValid,
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
            &.invalid{
                border: 3px solid red;
            }
        }
        button{
            background-color: rgb(62, 110, 173);
            color: #fff;
            border: none;
            font-size: 1.5rem;
            padding: 10px;
            &.invalid{
                background-color: rgb(227, 61, 61);
            }
        }
    }
</style>