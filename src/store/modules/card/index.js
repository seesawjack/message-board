
export default{
    namespaced:true,
    state(){
        return{
            msgEdit:'',
            editId:'',
        }
    },
    mutations:{
        storeEditMsg(state,payload){
            state.msgEdit = payload.content
        },
        editMsg(state,payload){
            state.editId = payload.id
            state.msgEdit = payload.storedResources.find(item=>item.id === payload.id.id).content
            console.log(state.msgEdit)
        },
        sendMsg(state,payload){
            payload.storedResources.filter(item=>{
                if(item.id === state.editId.id){
                    item.content = state.msgEdit
                }
            })
        },
        deleteMsg(_,payload){
            payload.storedResources.splice(payload.index,1)
        },
    },
    actions:{
        editMsg({commit,rootState},id){
            commit('editMsg',{
                id:id,
                storedResources:rootState.storedResources
            })
        },
        sendMsg({commit,rootState},id){
            commit('sendMsg',{
                id:id,
                storedResources:rootState.storedResources
            })
        },
        deleteMsg({commit,rootState}){
            commit('deleteMsg',{
                storedResources:rootState.storedResources
            })
        }
    }
}