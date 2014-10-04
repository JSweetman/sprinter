

function onClick(info, tab) {
	console.log(info.selectionText);
}

var contexts = ["page"];
chrome.contextMenus.create({"title" : "Hail an Uber!", "contexts" : ["selection"],
							"onclick" : onClick});


