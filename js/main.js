
        ;(function(){
            var loader = {
                href:'',
                load:function(href){

                    $('.test').fadeOut(300,function(){
                        //$('.site__post').hide();
                        $(".test").hide().load(href+' '+'.site__content', function(){
                            $('.test').fadeIn(500);
                        });
                    });
                }
            };

            var nav = {
                activate:function(athis){
                    $('.posts .active').removeClass('active');
                    if($('.posts').hasClass('is-center')){
                        $('.posts').toggleClass('is-center');
                    }
                    athis.parent().addClass('active');
                }
            };

            var bindUI = {
                pjax: function(){
                   $('[data-pjax]').bind('click', function(event){
                        event.preventDefault(); 
                        var self = $(this);
                        loader.href = self.attr('href');
                        loader.load(loader.href);
                        nav.activate(self)
                    });

                }
            };
            bindUI.pjax();
        })(jQuery);