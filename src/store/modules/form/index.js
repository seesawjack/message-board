import router from '../../../router.js'
import { uuid } from 'vue-uuid';

var moment = require('moment');
moment.locale('zh-tw');

export default {
    namespaced:true,
    state(){
        return{
            msgInput:'',
            pageId:router.currentRoute
        }
    },
    mutations:{
        storeInputMsg(state,payload){
            state.msgInput = payload.content
        },
        addMsg(state,payload){
            const time = moment().format('LLLL')
            const newResource = {
                id:uuid.v1(),
                pageId:state.pageId.params.boardId,
                time:time,
                content:state.msgInput,
            }
            payload.storedResources.unshift(newResource);
            state.msgInput = '';
        }
    },
    actions:{
        storeInputMsg(context,payload){
            context.commit('storeInputMsg',payload.content)
        },
        addMsg({ commit, rootState }){
            commit('addMsg',{storedResources:rootState.storedResources})
        }
    }
}