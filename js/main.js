$(document).ready(function() {
    $(".babi").hover(function(){
        $(this).css("border","2px solid white");
        $(this).css("color","white");
        $(".text").css("background-color","rgba(0,0,0,0.5)");
    },
       function(){
        $(this).css("border","none");
        $(this).css("color","transparent");
        $(".text").css("background-color", "transparent");
       }
    );
});

$(document).ready(function(){
    $("#des").click(function(){
       $(".design").toggle();
    }) 
})
$(document).ready(function(){
    $("#dev").click(function(){
       $(".development").toggle();
    }) 
})
$(document).ready(function(){
    $("#pro").click(function(){
       $(".product").toggle();
    }) 
})
