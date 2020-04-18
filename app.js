new Vue({
    el:"#vue_app",
    data: {
        message : "hello world",
        name : "Tawin ",
        website:'www.tawim.com',
        age:'25',
        count:'0',
        test_array:[],
        sex:''
    },
    methods:{
        getName:function(){
            return this.name;
        },
        setName:function(n){
            return this.name = n;
        },
        addAge:function(){
            this.age++;
            console.log( this.age);
        },
        subtractAge:function(){
            this.age--;
            console.log( this.age);
        },
        addCount:function(){
            this.count++;
            console.log('count'+this.count);

        }
    }
})