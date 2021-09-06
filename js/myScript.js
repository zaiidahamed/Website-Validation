//labSheet 04

function loadData(name)
{	
	if (name=="btn1"){
		document.getElementById("img1").src="images/i6.png";
		document.getElementById("para").innerHTML="The iPhone 6 and iPhone 6 Plus are smartphones designed and marketed by Apple Inc. They are the eighth generation of the iPhone, succeeding the iPhone 5S, and was announced on September 9, 2014 and released on September 19, 2014. The iPhone 6 and iPhone 6 Plus jointly were themselves replaced as the flagship devices of the iPhone series by the iPhone 6S and iPhone 6S Plus on September 9, 2015.";
	}else if (name=="btn2"){
		document.getElementById("img1").src="images/i7.jpg";
		document.getElementById("para").innerHTML="The iPhone 7 is now fully water-resistant.";
	}else if (name=="btn3"){
		document.getElementById("img1").src="images/i8.jpg";
		document.getElementById("para").innerHTML="A refined design that feels dated. Apple unveiled the iPhone 6 back in 2014, and it has stuck with the same basic design since then. ...";
	}else{
		document.getElementById("img1").src="images/xx.jpg";
		document.getElementById("para").innerHTML="The iPhone X Roman numeral X pronounced ten is a smartphone designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone.";
	}	
}

function priceForLoop()
{
	var priceArray = ['iPhone 6 - $ 900.00', 'iPhone 7 - $ 950.00', 'iPhone 8 - $ 2000.00', 'iPhone X - $ 3000.00', 'iPhone XS - $ 3500.00'];
	var i;
	var text="";
	
	for (i = 0; i < priceArray.length ; ++i){
		text = text + priceArray[i] + "<br>";
	}
	document.getElementById("img1").src="images/bgimage.jpg";
	document.getElementById("para").innerHTML= text;	
} 

function priceHigher()
{
	var price = [];
	var txt="";
	
	price["iPhone 6"] = 900.00;
	price["iPhone 7"] = 950.00;
	price["iPhone 8"] = 2000.00;
	price["iPhone X"] = 2500.00;
	price["iPhone XS"] = 3000.00;
	
	for (var i in price){
		if (price[i] >= 1000){
			txt+= i + " : " + price[i] + "<br>";
		}
	}
	
	document.getElementById("img1").src="images/bgimage.jpg";
	document.getElementById("para").innerHTML= txt;
}

function priceLower()
{
	var price = [];
	var txt="";
	
	price["iPhone 6"] = 900.00;
	price["iPhone 7"] = 950.00;
	price["iPhone 8"] = 2000.00;
	price["iPhone X"] = 2500.00;
	price["iPhone XS"] = 3000.00;
	
	for (var i in price){
		if (price[i] < 1000){
			txt+= i + " : " + price[i] + "<br>";
		}
	}
	
	document.getElementById("img1").src="images/bgimage.jpg";
	document.getElementById("para").innerHTML= txt;
}

function sum(){
	var x;
	var tot = 0;
	for(x = 1; x <= 10; ++x){
		tot += x;
	}
	document.getElementById("demo2").innerHTML = tot;
}

//----------------------------------------------------------------------- labSheet 05 ------------------------------------------------------------------

function checkPasswords(){
	if (document.getElementById("pwd").value != document.getElementById("rpwd").value)
	{
		alert("Password mismatch!");
		return false;
	}
	else{
		alert("Success!");
		return true;
	}
}

function enablebutton(){
	if (document.getElementById("policy").checked){
		document.getElementById("btn").disabled=false;
	}
	else{
		document.getElementById("btn").disabled=true;
	}
}










