
Vue.component('tawin',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">click : {{count}}</button>'
});
new Vue({
    el:"#show_post"
});
