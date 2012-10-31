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
	//Find value of selected radion button
	function getSelectedRadio(){
		var radios = document.forms[0].order;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				orderValue = radios[i].value;
			}						
		}
	}
	//Find value of selected checkbox button
	function getSelectedCheckbox(){
		var checkbox = document.forms[0].payment;
		for(var i=0; i<checkbox.length; i++){
			if(checkbox[i].checked){
				paymentValue = checkbox[i].value;
			}						
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('informationForm').style.display = "none";
				$('clear').style.display = "inline";								
				$('addNew').style.display = "inline";			
			    break;
			case "off":
				$('informationForm').style.display = "block";
				$('clear').style.display = "inline";								
				$('addNew').style.display = "none";
				$('items').style.display = "none";			
			    break;
			default:
				return false;
			
		}
	}
	
	function storeData(){		
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object.
		//Object properties contain array with the form label and input value.
		getSelectedRadio()
		getSelectedCheckbox()
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
	function getData(){
		toggleControls("on");
		if(localStorage.length == 0){
			alert("There is no data in Local Storage so default data was added.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;			
			}
		}
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
			
		}else{
			localStorage.clear();
			alert("All information has been deleted!");
			window.location.reload();
			return false;
		}
	
	}
			
	//Variable default
	var menuGroups = ["--Choose A Menu--", "Appetizer", "Entree", "Dessert"],
		orderValue,
		paymentValue;
		
	chooseMenu();
	
	
	
	//Set link & Submit Click Events
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);

});