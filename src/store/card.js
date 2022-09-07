import { defineStore } from 'pinia'
import { useIndexStore } from './pinia.js'
export const useCardStore = defineStore({
    id:'card',
    state(){
        return{
            msgEdit:'',
            editId:'',
        }
    },
    actions:{
        storeEditMsg(value){
            this.msgEdit = value
        },
        editMsg(id){
            const indexStore = useIndexStore()
            this.editId = id
            this.msgEdit = indexStore.storedResources.find(item=>item.id === id).content
        },
        sendMsg(){
            const indexStore = useIndexStore()
            indexStore.storedResources.filter(item=>{
                if(item.id === this.editId){
                    item.content = this.msgEdit
                }
            })
        },
        deleteMsg(index){
            const indexStore = useIndexStore()
            indexStore.storedResources.splice(index,1)
        }
    }
  })