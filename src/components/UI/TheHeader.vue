<template>
    <header>
        <h1>{{pageTitle? pageTitle :'留言板'}}</h1>
    </header>
    
</template>

<script>
export default {
    data(){
        return{
            page:{
                board1:'八卦板',
                board2:'西洽板',
                board3:'電影板'
            },
            pageTitle:''
        }
    },
    watch:{
        '$route.params.boardId':function(){
            this.pageTitle = this.page[this.$route.params.boardId] 
        }
    } 
}
</script>

<style scoped>
    header{
        background-color: cadetblue;
        padding: 20px 0px;

    } 
    h1{
        margin: 0px;
        text-align: center;
        color: #fff;
    }  
</style>