$(function(){
    loader();
    up();
    sidePanel();
    me();
    wow.init();
});
let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
let qq = true;
let weChat = true;
let me = function(){    //微信, qq
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
}

let sidePanel = function(){ //侧边导航
    $(".sideBtn").click(function(){
        $(".outer-side-panel").toggle();
        if(sideFlag){
             $(".sideBtn").attr("src","images/left.svg");
             sideFlag = false;  
        }else{
             $(".sideBtn").attr("src", "images/right.svg");
             sideFlag = true;
        } 
 });
}

let sideFlag = true; //侧边分类的箭头
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


    
