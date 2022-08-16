$(document).ready(function(){
    $("#submit").click(function(){
        if($("#name").val()==""){
            alert("enter youe name")
            return false;
        }
        if($("#phone").val()==""){
            alert("enter your phone");
            return false;
        }
        if($("#email").val()==""){
            alert("enter your phone");
            return false;
        }

        if($("#textarea").val()==""){
            alert("enter your phone");
            return false;
        }
    })
})