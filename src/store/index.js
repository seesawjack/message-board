import {createStore} from 'vuex';

import formModules from './modules/form/index.js';
import cardModules from './modules/card/index.js'


const store =createStore({
    modules:{
        form:formModules,
        card:cardModules
    },
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
            ]
        }
    }
})

export default store;

