<template>
	<the-header></the-header>
	<message-form ></message-form>
	<ul>
		<message-card></message-card>
	</ul>
</template>

<script>
import MessageCard from './components/UI/MessageCard.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import MessageForm from './components/AddMessage/MessageForm.vue'

export default {
		name: 'App',
		components:{
			MessageCard,
			TheHeader,
			MessageForm
		},
		data(){
			return{
				storedResources:[],
			}
		},
		provide(){
			return{
				addMessage:this.addMessage,
				resourse:this.storedResources,
				deleteMessage:this.deleteMessage
			}
		},
		methods:{
			addMessage(title){
				const week = ['日','一','二','三','四','五','六']
				const time = `${new Date().getFullYear()}/
				${new Date().getMonth()+1}/
				${new Date().getDate()}(${week[new Date().getDay()]}) 
				${new Date().getHours()}:${new Date().getMinutes()}`;

				const newResource = {
					id:new Date().toISOString(),
					time:time,
					title:title,
				}
				this.storedResources.push(newResource);
				sessionStorage.setItem('message',JSON.stringify(this.storedResources));
			},
			deleteMessage(index){
				this.storedResources.splice(index,1)
			}
		}
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: rgb(52, 52, 52);
}   

ul{
	list-style: none;
}
</style>
