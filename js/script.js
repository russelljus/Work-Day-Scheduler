$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))




$(".saveBtn").on("click",function(){
    var textAreaValue = $ (this).siblings(".description").val()
    var timeOfDay = $ (this).parent().attr("id")
    localStorage.setItem(timeOfDay, textAreaValue)
})

$("#9 .description").val(localStorage.getItem("9"))

$("#10 .description").val(localStorage.getItem("10"))

$("#11 .description").val(localStorage.getItem("11"))

$("#12 .description").val(localStorage.getItem("12"))

$("#13 .description").val(localStorage.getItem("13"))

$("#14 .description").val(localStorage.getItem("14"))

$("#15 .description").val(localStorage.getItem("15"))

$("#16 .description").val(localStorage.getItem("16"))

$("#17 .description").val(localStorage.getItem("17"))