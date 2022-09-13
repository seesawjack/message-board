import router from '@/router.js'
import { uuid } from 'vue-uuid';
import { defineStore } from 'pinia'
import { useIndexStore } from '@/store/index.js'
var moment = require('moment');
moment.locale('zh-tw');

export const useFormStore = defineStore({
    id:'form',
    state(){
        return{
            msgInput:'',
            pageId:router.currentRoute
        }
    },
    actions:{
        storeInputMsg(value){
          this.msgInput = value
        },
        addMsg(){
            const indexStore = useIndexStore()
            const time = moment().format('LLLL')
            const newResource = {
                id:uuid.v1(),
                pageId:this.pageId.params.boardId,
                time:time,
                content:this.msgInput,
            }
            indexStore.storedResources.unshift(newResource);
            this.msgInput = '';
        }
    }
  })