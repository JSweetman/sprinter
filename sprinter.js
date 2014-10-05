
var url = "http://localhost:3000/interpret/python"
var imgUrl = "http://assets.rollingstone.com/assets/images/list/3328d1b86cdfc8351a52e3eabbf755efd93cab8c.jpg"

function onClick(info, tab) {
	$.ajax({type: "POST",
	url : url,
	data : {stuff : info.selectionText },
	success : function(data) {
		chrome.notifications.create("", { title: "Result", message : data.stdout, iconUrl : imgUrl, type: "basic" }, function(id) {
			console.log(id);
		});
		console.log(data);
	}});
	console.log(info.selectionText);
}

var contexts = ["page"];
chrome.contextMenus.create({"title" : "Run Code", "contexts" : ["selection"],
							"onclick" : onClick});


