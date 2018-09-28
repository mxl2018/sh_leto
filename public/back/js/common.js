$(document).ajaxStart(function(){
    NProgress.start()
})
$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done()
    },500)
})
//实现公共部分的分类页切换功能
$(function(){
    $('.nav .cate').on('click',function(){
        $('.nav .child').slideToggle();
    })
})
// 模态框
$('.loginOut').on('click', function () {
    $('#loginOut').modal('show')
  })
$('.btn-primary').on('click',function(){
    $.ajax({
        type: "get",
        url: "/employee/employeeLogout",
        dataType: "json",
        success: function( info ) {
          if ( info.success ) {
            // 退出成功, 跳转到登陆页
            location.href = "login.html";
          }
        }
      })
})