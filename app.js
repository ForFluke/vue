var post = new Vue({
    el:"#show_post",
    data: {
        title:'event post title',
        message:'message post'
    },
    methods:{
       
    }
});
var comment = new Vue({
    el:"#show_comment",
    data: {
        comment_test : 'test comment nana'
    },
    methods:{
       
    }
});
var action = new Vue({
    el:"#show_action",
    data: {
        like:false
    },
    methods:{
        changeLike:function(){
           this.like = !this.like;
        }
    }
})