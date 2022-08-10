<template>
 <base-dialog 
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
    >
      <template #default>
        <p>請至少輸入請至少輸入一個有效值</p>
        <p>請確認您有輸入內容</p>
      </template>
      <template #actions>
        <button>okay</button>
      </template>
    </base-dialog>
    <form @submit.prevent="submitData()">
		<input type="text" ref="titleInput" :value="editValue">
		<button :class="editValue? 'edit':''">{{editValue? '編輯完成':'輸入留言'}}</button>
	</form>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue'
export default {
    props:['editValue'],
    inject:['addMessage','editMessage'],
    components:[
        BaseDialog
    ],
    methods:{
        submitData(){
        const enterMessage = this.$refs.titleInput.value;

        if(this.editValue){
            this.editMessage(enterMessage)
            this.$refs.titleInput.value = '';
            console.log('編輯')
            return;
        }

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
            &.edit{
                background-color: rgb(227, 61, 61);
            }
        }
    }
</style>