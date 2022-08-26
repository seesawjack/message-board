import {createStore} from 'vuex';
import { uuid } from 'vue-uuid';

var moment = require('moment');
moment.locale('zh-tw');


const store =createStore({
    state(){
        return{
            storedResources:[],
            inputMsg:'',
        }
    },
    mutations:{
        storeMessage(state,payload){
            state.inputMsg = payload.content
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
        }
    }
})

export default store;

