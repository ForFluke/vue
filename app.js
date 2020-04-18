new Vue({
    el:"#vue_app",
    data: {
        like:false,
        array_product_list:['product1','product2','product3','product4','product5','product6','product7'],
        employee:[
            {
                name:'A',age:20,status:false
            },{
                name:'B',age:25,status:false
            },{
                name:'C',age:30,status:true
            },{
                name:'D',age:35,status:true
            },{
                name:'E',age:40,status:true
            },
        ]
    },
    methods:{
        eventChange:function(){
            if( this.like == true){
                this.like = false
            }else{
                this.like = true
            }
        }
    }
})