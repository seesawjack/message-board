import {createStore} from 'vuex';
import { uuid } from 'vue-uuid';

var moment = require('moment');
moment.locale('zh-tw');


const store =createStore({
    state(){
        return{
            storedResources:[],
            msgInput:'',
            msgEdit:'',
            editId:'',
            allMessage:[
                {
                    id:'board1',
                    name:{
                        english:'gossiping',
                        chinese:'八卦版'
                    },
                    img:'gossiping-bn.png',
                    color:'red'
                },
                {
                    id:'board2',
                    name:{
                        english:'c_chat',
                        chinese:'西洽版'
                    },
                    img:'cchat-bn.png',
                    color:'blue'
                },
                {
                    id:'board3',
                    name:{
                        english:'movie',
                        chinese:'電影版'
                    },
                    img:'movie-bn.png',
                    color:'green'
                }
            ],
        }
    },
    mutations:{
        storeInputMsg(state,payload){
            state.msgInput = payload.content
        },
        storeEditMsg(state,payload){
            state.msgEdit = payload.content
        },
        addMsg(state){
            const time = moment().format('LLLL')
            const newResource = {
                id:uuid.v1(),
                time:time,
                content:state.msgInput,
            }
            state.storedResources.unshift(newResource);
            state.msgInput = ''
        },
        editMsg(state,payload){
            state.editId = payload.id
            state.msgEdit = state.storedResources.find(item=>item.id === payload.id).content
        },
        sendMsg(state){
            state.storedResources.filter(item=>{
                if(item.id === state.editId){
                    item.content = state.msgEdit
                }
            })
        },
        deleteMsg(state,payload){
            state.storedResources.splice(payload.index,1)
        }
    }
})

export default store;

