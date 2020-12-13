function addf()
{
var x = Number(document.getElementById("p1").value);
var y = Number(document.getElementById("p2").value);
var z = Number(document.getElementById("p3").value);
var d = z%100;
var c = parseInt(z/100);
if (y==1)
{
	y=11;
	d=d-1
}
else if (y==2)
{
	y=12;
	d=d-1;
}
else if (y==3)
{
	y=1;
}
else if (y==4)
{
	y=2;
}
else if (y==5)
{
	y=3;
}
else if (y==6)
{
	y=4;
}
else if (y==7)
{
	y=5;
}
else if (y==8)
{
	y=6;
}
else if (y==9)
{
	y=7;
}
else if (y==10)
{
	y=8;
}
else if (y===11)
{
	y=9;
}
else if(y==12)
{
	y=10;
}
var d1 = parseInt(d/4);
var c1 = parseInt(c/4);
var y1 = parseInt(((13*y)-1)/5);
var sum1 = x+y1;
var sum2 = d1+d;
var sum3 = c1-(2*c); 
var b = sum1+sum2+sum3;
var sum = b%7;
if(b>=0)
{
if (sum==0)
{
document.getElementById("puss").innerHTML = "Sunday";
}
else if (sum==5)
{
document.getElementById("puss").innerHTML = "Friday";
}
else if (sum==1)
{
document.getElementById("puss").innerHTML = "Monday";
}
else if (sum==2)
{
document.getElementById("puss").innerHTML = "Tuesday";
}
else if (sum==3)
{
document.getElementById("puss").innerHTML = "Wednesday";
}
else if (sum==4)
{
document.getElementById("puss").innerHTML = "Thursday";
}
else if (sum==6)
{
document.getElementById("puss").innerHTML = "Saturday";
}
}
else
{
var b1 =parseInt(b/7);
if (sum==0)
{
var su = sum+7;
if (su==0)
{
document.getElementById("puss").innerHTML = "Sunday";
}
else if (su==5)
{
document.getElementById("puss").innerHTML = "Friday";
}
else if (su==1)
{
document.getElementById("puss").innerHTML = "Monday";
}
else if (su==2)
{
document.getElementById("puss").innerHTML = "Tuesday";
}
else if (su==3)
{
document.getElementById("puss").innerHTML = "Wednesday";
}
else if (su==4)
{
document.getElementById("puss").innerHTML = "Thursday";
}
else if (su==6)
{
document.getElementById("puss").innerHTML = "Saturday";
}
}
else
{
b1=-(b1-1);
var b2 =((7*b1)+b);
var summ = b2;
if (summ==0)
{
document.getElementById("puss").innerHTML = "Sunday";
}
else if (summ==5)
{
document.getElementById("puss").innerHTML = "Friday";
}
else if (summ==1)
{
document.getElementById("puss").innerHTML = "Monday";
}
else if (summ==2)
{
document.getElementById("puss").innerHTML = "Tuesday";
}
else if (summ==3)
{
document.getElementById("puss").innerHTML = "Wednesday";
}
else if (summ==4)
{
document.getElementById("puss").innerHTML = "Thursday";
}
else if (summ==6)
{
document.getElementById("puss").innerHTML = "Saturday";
}
}
}
}