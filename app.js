
Vue.component('showcomment',{
    props:['comment'],
    template:'<h3 style="color: #F44336">{{comment}}</h3>'
})
new Vue({
    el:"#show_post",
    data:{
        newComment:'',
        comment:[
            'a','b','c'
        ]
    },
    methods:{
        addComment:function(){
            this.comment.push(this.newComment)
            this.newComment = ''
        }
    }
});
