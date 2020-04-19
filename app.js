new Vue({
    el:"#vue_app",
    data: {
      newData:{
          empName:'',
          salary: 0
      },
      empGroup:[
        {
            empName:  'mr.A',
            salary: 5000
        },
        {
            empName:  'mr.B',
            salary: 6000
        }
      ]
    },
    methods:{
        appEmp:function(){
            this.empGroup.push(
                {
                    empName:this.newData.empName,
                    salary : this.newData.salary
                }
              
            );
            this.newData.empName = '';
            this.newData.salary = 0;
        }
    },
    computed:{
        sumation:function(){
            var sum = this.empGroup.reduce(function(value , data){
                return value + Number(data.salary);
            },0);
            return sum;
        }
    }
})