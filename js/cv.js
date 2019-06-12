$(document).ready(function (){
    $.ajax({
        url: "http://localhost:5000/api/values"
    }).done(function(data){
        cv = JSON.parse(data);
        $("#name").text(cv.name);
    })
})