var checkList = document.getElementById("checkList"),
	addBtn = document.getElementById("addBtn"),
	clearBtn = document.getElementById("clearBtn"),
	input = document.getElementById("input"),
	arr = []

function addEntry() {
	var newDiv = document.createElement('div')
	newDiv.innerHTML = "<input type='checkbox' name='newCheckboxes[]'>" 
	+ input.value
	if (input.value === "") {
		window.alert("Textfield is empty!")
	}
	else {
		checkList.appendChild(newDiv)
		arr.push(newDiv)
	}
}

function removeCompleted() {
	var counter = 0
	var checkBox
	newList = []
	for (i = 0; i < arr.length; i++) {
		checkBox = arr[i]
		dude = checkBox.getElementsByTagName("input")
		if (dude.checked) {
			counter++
		}
		newList.push(dude)

	}
	console.log(newList)
	console.log(counter)


}

addBtn.addEventListener('click', function() {
	console.log("Adding a new entry...")
	addEntry()
})

clearBtn.addEventListener('click', function() {
	console.log("Removing completed entries")
	removeCompleted()
})