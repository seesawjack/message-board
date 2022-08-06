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
			<p>{{item.date}}</p>
			<span @click="isDone(item)" :class="{done:item.done}" :contenteditable="item.edit">{{item.finalValue}}</span>
			<button @click="isEditBtn(item)">Edit</button>
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
				date:'',
				isEdit:false,

			}
		},
		computed:{
			isContentEdit(){
				return this.isEdit? 'contenteditable= true':'';
			}
		},
		methods:{
			addList(){
				if(!this.enterValue){
					alert('請輸入內容') 
					return;
				} 
				const week = ['日','一','二','三','四','五','六']
				this.date = `${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}(${week[new Date().getDay()]}) ${new Date().getHours()}:${new Date().getMinutes()}`;
				this.outputValue.push({
					done:false,
					finalValue:this.enterValue,
					date:this.date,
					edit:this.isEdit
				});
				sessionStorage.setItem('todoList',JSON.stringify(this.outputValue));
				this.enterValue= '';
			},
			removeList(index){
				this.outputValue.splice(index,1)
			},
			isDone(item){
				if(!item.edit){
					item.done=!item.done;
					sessionStorage.setItem('todoList',JSON.stringify(this.outputValue));
				}
			},
			isEditBtn(item){
				item.edit = !item.edit;
				console.log(item.enterValue)
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
span{
	margin-right: 10px;
}
span.done{
	text-decoration-line: line-through;
	color: gray;
}
</style>
