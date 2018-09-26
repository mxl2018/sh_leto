// 表单校验功能
$(function(){
    $("#form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
          fields:{
              username:{
                  validators:{
                    notEmpty:{
                        message:"用户名不能为空"
                    },
                    callback:{
                        message:"用户名错误"
                      }
                  }
              },
              password:{
                  validators:{
                      notEmpty:{
                          message:"密码不能为空"
                      },
                      stringLength:{
                        min:6,
                        max:12,
                        message:"用户名长度必须6~12位"
                    },
                    callback:{
                        message:"密码错误"
                      }
                  }
              },
          }
    })
    // 表单校验成功,注册表单校验成功的事件，阻止默认提 交，使用ajax提交
    $("#form").on('success.form.bv',function(e){
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$("#form").serialize(),
            dataType:"json",
            success:function(info){
                console.log(info)
               if(info.success){
                   location.href="index.html";
               }
               else if(info.error==1000){
                   message:"用户名不存在!"
                   $(form).data('bootstrapValidator').updateStatus('username','INVALID','callback')
               }
               else if(info.error==1001){
                message:"密码错误"
                $(form).data('bootstrapValidator').updateStatus('password','INVALID','callback')
                }
            }
        })
    })
    $('[type="reset"]').on('click',function(){
        console.log($(form).data('bootstrapValidator'));
        $(form).data('bootstrapValidator').resetForm();
    })
})