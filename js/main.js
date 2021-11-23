// Portfolio hover 
$(document).ready(function() {
    $(".card").mouseenter(function(){
        $(this).css("opacity","0.6");
        $(".work").show();
    })
       $(".card").mouseleave(function(){
        $(this).css("opacity", "1");
        $(".work").hide();
    })
       });
       
                            
                        




// what we do toggle
$(document).ready(function(){
    $("#desi").click(function(){
       $(".design").toggle();
    }) ;
});
$(document).ready(function(){
    $("#dev").click(function(){
       $(".development").toggle();
    }) ;
});
$(document).ready(function(){
    $("#pro").click(function(){
       $(".product").toggle();
    }) ;
});

// contact page

function Message() {
    var name = document.getElementById("mce-NAME").value;
    var email = document.getElementById("mce-EMAIL").value;
    var message = document.getElementById("comment").value;
    if (email !== "" && name !== "" && message !== "") {
        alert(
            "Hae" + "" + name +  " Thanks for reaching out, We have received your Message!."
        );
    } else if (email == "" || name !== "" || message !== "") {
        alert("Please fill in the field");
    }
}