// $("document").ready(function(){
// $("#img1").mouseenter(function(){
//     $("#img1").css("width", "500px");
// });
// $("#img1").mouseleave(function(){
//     $("#img1").css("width","250px");
// })
// });

// $("#img1").hover(func1, func2)
// function func1(){
//     $("#img1").css("width", "500px");
// }
// function func2(){
//      $("#img1").css("width", "250px");
// }
$("document").ready(function () {
    $("#btn1").click(function(){
    $("#img1").hide(); 
    })
    $("#btn2").click(function(){
    $("#img1").show(); 
    })
    $("#btn3").click(function(){
    $("#img1").toggle(); 
    })
});