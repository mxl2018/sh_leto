$(function(){
    var currentPage = 1;
    var size =5;
    render();
    function render(){
        $.ajax({
            type:'GET',
            url:'/user/queryUser',
            data:{page:currentPage,pageSize:size},
            dataType:'json',
            success:function(info){
              var info = info ;
              var str = template('tmp',info);
            //   console.log( $('info'))
            //     console.dir( $('tbody'))
                $('tbody').html(str);
                $('#pageLimit').bootstrapPaginator({
                    bootstrapMajorVersion: 3,
                     // 总页数
                    totalPages: Math.ceil( info.total / info.size ),
                    // 当前页
                    currentPage: info.page,
                    // 给分页按钮添加点击事件
                    onPageClicked: function( a, b, c, page ) {
                      console.log( page );
                      // 更新当前页
                      currentPage = page;
                      // 重新根据 render
                      render();
                    }
                           
                })
            }
        })
    }
})

