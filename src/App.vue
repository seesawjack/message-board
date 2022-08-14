<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/UI/TheHeader.vue';
export default {
	name: 'App',
	components:{
		TheHeader,
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
