
        ;(function(){
            var loader = {
                href:'',
                load:function(href){
                    $('.test').fadeOut(300,function(){
                        //$('.site__post').hide();
                        $(".test").hide().load(href+' '+'.js-fetch', function(){
                            $('.test').fadeIn(500);
                        });
                    });
                    //alert('are there two?');
                    if(href=='/'){
                        history.pushState(null,null,'/');
                        return;
                    }
                    history.pushState(null,null,href);
                    
                }

                
            };

            var nav = {
                activate:function(athis){
                    $('.posts .active').removeClass('active');
                    if($('.posts').hasClass('is-center')){
                        $('.posts').toggleClass('is-center');
                    }
                    athis.parent().addClass('active');
                },
                reset:function(){
                    //alert('resetting');
                    $('.active').removeClass('active');
                    $('.test').children().fadeOut(500).remove();
                    history.pushState(null,null, '/');
                    //$('.test').children().remove();
                }
            };

            var bindUI = {
                pjax: function(){
                   $('[data-pjax]').bind('click', function(event){
                        event.preventDefault(); 
                        var self = $(this);
                        if(self.parent().hasClass('active')){
                            nav.reset();
                            return;
                        }
                        loader.href = self.attr('href');
                        if (loader.href=='/index.html'){
                            nav.reset();

                            return;
                        }
                        loader.load(loader.href);
                        nav.activate(self);

                    });

                }
            };
            bindUI.pjax();
            urlnow = window.location.pathname;
            console.log(urlnow);
            $('[href="'+urlnow+'"]').parent().addClass('active');
        })(jQuery);