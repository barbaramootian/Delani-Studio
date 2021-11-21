// Portfolio hover 
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

// what we do toggle
$(document).ready(function(){
    $("#desi").click(function(){
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
// contact alert message
function message() {
var name = document.getElementById("mce-NAME" ).value;
var email = document.getElementById("mce-EMAIL").value;
var message = document.getElementById("mce-MMERGE3").value;
if (email !== "" && name !== "" &&  message !== ""){
    alert( hae + "" + name  + "Thanks for reaching to us.")
}
}