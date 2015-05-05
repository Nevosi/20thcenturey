$(".years-list").css({"opacity":"0"});
            
                $(".category").hover(function(){
                    $(this).find('ul:first').stop().show().animate({
                        "margin-top" : "10px",
                        "opacity" : "1"
                    }, 400); 
                
                },function(){ 
                    $(".category").find('ul:first').stop().animate({
                        "margin-top" : "0",
                        "opacity" : "0"
                    });
                });