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

// $(document).ready(function(){
//     $("#we").click(function(){
//        $(".do").toggle();
//     }) 
// })