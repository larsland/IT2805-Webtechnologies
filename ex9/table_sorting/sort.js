var tBody = document.getElementById("the-table-body"),
	sortBtn1 = document.getElementById("sort-button-1"),
	sortBtn2 = document.getElementById("sort-button-2"),
	sortBtn3 = document.getElementById("sort-button-3")

function sortByCol(table, col){
    var rows = table.rows, 
    	rowLength = rows.length, 
    	array = [], 
    	i, j, cells, clen;

    // fill the array with values from the table
    for(i = 0; i < rowLength; i++){
	    cells = rows[i].cells;
	    clen = cells.length;
	    array[i] = new Array();
        for(j = 0; j < clen; j++){
       		array[i][j] = cells[j].innerHTML;
        }
    }

    //Sorting the array
    array.sort(function(a, b) {
    	if (a[col] == b[col]) {
    		return 0
    	}
    	else {
    		return (a[col] > b[col])
    	}
    });

    //Inserting new data into html
    for(i = 0; i < rowLength; i++){
        array[i] = "<td>"+array[i].join("</td><td>")+"</td>";
    }
    table.innerHTML = "<tr>"+array.join("</tr><tr>")+"</tr>";
}

sortBtn1.addEventListener('click', function() {
	console.log("Sorting by 1. col")
	sortByCol(tBody, 0)
})
sortBtn2.addEventListener('click', function() {
	console.log("Sorting by 2. col")
	sortByCol(tBody, 1)
})
sortBtn3.addEventListener('click', function() {
	console.log("Sorting by 3. col")
	sortByCol(tBody, 2)
})

