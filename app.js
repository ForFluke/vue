
Vue.component('tawin',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">click : {{count}}</button>'
});

Vue.component('post',{
    props:['title'],
    template:'<h3>{{title}}</h3>'
});
Vue.component('showview',{
    props:{
        t_name:{
            type:String,
            required:true
        },
        view:{
            type:Number,
            default:0
        }
    },
    template:'<h3>{{t_name}} | {{view}}</h3>'
});
new Vue({
    el:"#show_post"
});
