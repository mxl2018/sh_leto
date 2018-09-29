$(function(){
    var currentPage = 1;
    var pageSize=5;
    // 发送ajax请求渲染页面
    render();
    function render(){
        $.ajax({
            type:'get',
            url:'/category/queryTopCategoryPaging',
            data:{page:currentPage,pageSize:pageSize},
            dataType:'json',
            success:function(info){
                console.log(info)
                var strtmp = template('firsttmp',info);
                $('tbody').html(strtmp);
                // 添加分页标签
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    totalPages:Math.ceil(info.total/info.size),
                    currentPage:info.page,
                    onPageClicked:function(event, originalEvent, type,page){
                        currentPage=page;
                        render();
                    }
                })
            }
        })
    }
    // 给添加分类页注册点击事件
    $('#addfirst').on('click',function(){
        // 遮罩层展示
        $('#firstModal').modal('show');
    })
    // 验证表单信息
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
          fields: {
            //校验用户名，对应name表单的name属性
            categoryName: {
              validators: {
                //不能为空
                notEmpty: {
                  message: '请输入一级分类'
                },
              }
            },
          }
    })
    // 表单插件验证成功后。会触发success.form.bv会默认··提交
    $('#form').on('success.form.bv',function(e){
        console.log(1);
        e.preventDefault();
        // 发送ajax请求提交
        $.ajax({
            type:'post',
            url:'/category/addTopCategory',
            data:$('#form').serialize(),
            dataType:'json',
            success:function(info){
                if(info.success){
                    $("#firstModal").modal('hide');
                    currentPage=1;
                    render();
                    // 获取实例对象。调用reset方法
                    var validator=$('#form').data('bootstrapValidator').resetForm();
                }

            }

        })
    })
})