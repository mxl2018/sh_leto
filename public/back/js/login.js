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
                  }
              },
              password:{
                  validators:{
                      notEmpty:{
                          message:"密码不能为空"
                      },
                      stringLength:{
                        min:2,
                        max:6,
                        message:"用户名长度必须2~6位"
                    }
                  }
              },
              callback:{
                message:"密码错误"
              }
          }
    })
    // 表单校验成功,注册表单校验成功的事件，阻止默认提 交，使用ajax提交
    $.ajax({
        
    })
})