// Daniel Reyes
// VFW-1112
// Project 2
// Nov 1st

//Wait untill DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;		
	}
		//Select field element populated with options
	function chooseMenu(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "menus");
		for(var i=0, j=menuGroups.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = menuGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);		
	}
	
	function storeData(key){		
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		var item			= {};
			item.fname		= ["First Name:", $('fname').value];
			item.lname		= ["Last Name:", $('lname').value];	
			item.email		= ["Email:", $('email').value];
			item.phone		= ["Phone Number:", $('phone').value];
			item.address	= ["Address:", $('address').value];
			item.order		= ["Order:", orderValue];
			item.payment	= ["Payment", paymentValue];
			item.select 	= ["Menus:", $('select').value];
			item.amount 	= ["Order Amount:", $('amount').value];
			item.date		= ["Delivery Date:", $('date').value];
			item.comments	= ["Additional Instructions:", $('comments').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Order Saved!");
	}
			
	//Variable default
	var menuGroups = ["--Choose A Menu--", "Appetizer", "Entree", "Dessert"];
	chooseMenu();
	
	
	
	//Set link & Submit Click Events
/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);




});