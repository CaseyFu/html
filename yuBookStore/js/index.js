$(function(){
    loader();
    up();
    sidePanel();
    clickTrigger();
    wow.init();
});
let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});




let clickTrigger = function(){    //微信, qq
    $("#weChat").click(function(){
        $("#weChat_QR").show();
    });
    $("#close_weChat").click(function(){
        $("#weChat_QR").hide();
    })
    $("#qq").click(function(){
        $("#qq_QR").show();
    })
    $("#close_qq").click(function(){
        $("#qq_QR").hide();
    })
    $("#user").click(function(){
        $("#self-info").show();
    })
    $("#close_self-info").click(function(){
        $("#self-info").hide();
    })
    $(".star").click(function(){    //点赞表情
        let src = $(this).attr("src");
        if(src.includes("delight")){
           $(this).attr("src","images/indifferent.svg"); 
        }else{
            $(this).attr("src","images/delight.svg"); 
        }
    })
}

let sidePanel = function(){ //侧边导航
    $(".sideBtn").click(function(){
        let src = $(this).attr("src");
        $(".outer-side-panel").toggle();
        if(src.includes("right")){
             $(this).attr("src","images/left.svg"); 
        }else{
             $(this).attr("src", "images/right.svg");
        } 
 });
}

// let sideFlag = true; //侧边分类的箭头
let up = function(){    
    $(window).scroll(function (event) {
        let height_present = $(window).scrollTop();
        if(height_present < 400){
            $(".up").hide();
        }else{
            $(".up").show();
        }
    });
}

let loader = function(){    //加载动画
    $(".loader").fadeOut("slow");
    $(".outer-side-panel").hide();
    $(".up").hide();
    $("#weChat_QR").hide();
    $("#qq_QR").hide();
    $("#self-info").hide();
};


    
