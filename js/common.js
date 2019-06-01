$(function(){
    loader();
})
let loader = function(){
    $(".loader").fadeOut("slow");
    $(".side-panel").hide();
    $("#weChat_QR").hide();
    $("#qq_QR").hide();
    $("#self-info").hide();
};

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
}