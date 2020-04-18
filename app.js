new Vue({
    el:"#vue_app",
    data: {
        message : "hello world",
        name : "Tawin "
    },
    methods:{
        getName:function(){
            return this.name;
        },
        setName:function(n){
            return this.name = n;
        }
    }
})