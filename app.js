
function newFunction(){
    var result = document.getElementById("result")
var Birth_Date = document.getElementById("Date").value;
var Birth_Month = document.getElementById("Month").value;
var Birth_year = document.getElementById("Year").value;
var birthday = new Date(Birth_Date , Birth_Month , Birth_year)

var now = new Date()
var user = now.getTime() - birthday.getTime()
var $num = Math.floor(user / 1000 )
if ($num >= 18 ) {
alert("ok you are accept!")
}else{
alert("you are under age")
}
alert($num)
}