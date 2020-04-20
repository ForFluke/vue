
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
new Vue({
    el:"#show_post"
});
