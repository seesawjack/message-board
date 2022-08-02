<template>
  <h1>Message Board</h1>
	<form @submit.prevent="addList()">
		<label>New Message </label>
		<input type="text" v-model="enterValue">
		<button>Add Message</button>
	</form>
	<h2>Message List</h2>
	<ul>
		<li v-for="(item,index) in outputValue" :key="index">
			<span @click="isDone(item)" :class="{done:item.done}">{{item.finalValue}}</span>
			<button  @click="removeList(index)">Remove</button>
		</li>
	</ul>
	<h4 v-if="outputValue.length == 0 ">Empty list.</h4>
</template>

<script>
export default {
		name: 'App',
		data(){
			return{
				enterValue:'',
				outputValue:[],	
			}
		},
		methods:{
			addList(){
				if(!this.enterValue){
					alert('請輸入內容') 
					return;
				} 
				this.outputValue.push({
					done:false,
					finalValue:this.enterValue
				});
				sessionStorage.setItem('todoList',JSON.stringify(this.outputValue));
				this.enterValue= '';
			},
			removeList(index){
				this.outputValue.splice(index,1)
			},
			isDone(item){
				item.done=!item.done;
				sessionStorage.setItem('todoList',JSON.stringify(this.outputValue));
			}
		},
		beforeMount(){
			if(sessionStorage.getItem('todoList')){
				this.outputValue = JSON.parse(sessionStorage.getItem('todoList'))
			}
		}
}


</script>

<style>

</style>
