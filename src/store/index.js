import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
    id:'all',
    state(){
        return{
            storedResources:[],
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
            isAuth:false
        }
    },
    getters:{
        isAuthIn(state){
            return state.isAuth 
        }
    },
    actions:{
        logIn(){
            this.isAuth = true
        },
        logOut(){
            this.isAuth = false
        }
    }
  })