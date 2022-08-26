import {createStore} from 'vuex';
import { uuid } from 'vue-uuid';

var moment = require('moment');
moment.locale('zh-tw');


const store =createStore({
    state(){
        return{
            storedResources:[],
            inputMsg:'',
            editInput:'',
            editId:''
        }
    },
    mutations:{
        storeMessage(state,payload){
            state.inputMsg = payload.content
            
        },
        storeEditMessage(state,payload){
            state.editInput = payload.content
        },
        addMessage(state){
            const time = moment().format('LLLL')
            const newResource = {
                id:uuid.v1(),
                time:time,
                content:state.inputMsg,
            }
            state.storedResources.unshift(newResource);
            state.inputMsg = ''
        },
        editMsg(state,payload){
            state.editId = payload.id
            state.editInput = state.storedResources.find(item=>item.id === payload.id).content
        },
        check(state){
            state.storedResources.filter(item=>{
                if(item.id === state.editId){
                    item.content = state.editInput
                }
            })
            console.log('123')
        },
        deleteMsg(state,payload){
            state.storedResources.splice(payload.index,1)
        }

    },
    getters:{
        editInput(state){
            return state.editInput
        }
    }
})

export default store;

