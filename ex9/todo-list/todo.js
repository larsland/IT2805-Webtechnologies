var checkList = document.getElementById("checkList"),
	addBtn = document.getElementById("addBtn"),
	clearBtn = document.getElementById("clearBtn"),
	input = document.getElementById("input"),
	arr = [];

function addEntry() {
	var newDiv = document.createElement('div');
	newDiv.innerHTML = "<input type='checkbox' name='newCheckboxes[]'>"
	+ input.value;
	if (input.value === "") {
		window.alert("Textfield is empty!");
	}
	else {
		checkList.appendChild(newDiv);
		arr.push(newDiv);
        input.value = "";
	}
}

function getCheckList() {
    var checkBox,
        div,
        temp = [];
	for (var i = 0; i < arr.length; i++) {
		div = arr[i];
		checkBox = div.getElementsByTagName("input");
        temp.push(checkBox[0]);
	}
    return temp;
}

function removeSelected() {
    var checkList = getCheckList();
    for (var i = 0; i < checkList.length; i++) {
        if (checkList[i].checked === true) {
            checkList[i].parentNode.remove();
        }
    }
}

addBtn.addEventListener('click', function() {
	console.log("Adding a new entry...");
	addEntry()
});

clearBtn.addEventListener('click', function() {
	console.log("Removing completed entries");
	removeSelected()
});