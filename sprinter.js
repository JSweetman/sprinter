

function onClick(info, tab) {
	console.log(info.selectionText);
}

//Add Hail an Uber when a user right clicks a selection.
var contexts = ["page"];
chrome.contextMenus.create({"title" : "Run Code", "contexts" : ["selection"],
							"onclick" : onClick});


