$(document).ready(function() {
    $("#blanks form").submit(function(event){


var q1=document.forms["myform"]["black"].value;
var q2=document.forms["myform"]["black"].value;
var q1=document.forms["myform"]["black"].value;
var q2=document.forms["myform"]["black"].value;
var q1=document.forms["myform"]["black"].value;
var q2=document.forms["myform"]["black"].value;
var marks=0;

if(q1=="True")
{
 marks=marks+2;
 }
if(q2=="Tree")
{
 marks=marks+3;
 }
if(q3=="Var")
{
 marks=marks+2;
}
if(q4=="Statically")
{
 marks=marks+3;
}
if(q5=="False")
{
 marks=marks+2;
}
if(q6=="No")
{
 marks=marks+3;
}
alert("your score:"+marks);
