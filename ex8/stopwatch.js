var	display = document.getElementById("display-area"),
	toggle = document.getElementById("toggle-button"),
	clear = document.getElementById("reset-button"),
	running,
	startTime,
	interval,
	temptime = 0

	//Button actions
	function toggleBtn() {
		if (!running) {
			startTime = new Date()
			running = true
			interval = window.setInterval(add, 1)
		}
		else {
			running = false
			window.clearInterval(interval)
			temptime += (Date.now() - startTime)
		}
	}
	function clearBtn() {	
		temptime = 0
		running = false
		startTime = new Date()
		window.clearInterval(interval)
		display.innerHTML = "00:00:00.000"
	}

	//Updating the display field, and adding time
	function add() {
		var time = new Date().getTime() - startTime.getTime()
		display.value = formatTime(time + temptime)
	}

	//Functions to format the dreaded Date object
	function formatTime(time) {
       	var h = m = s = ms = 0;
        var newTime = "";
        h = Math.floor(time / (60 * 60 * 1000));
        time = time % (60 * 60 * 1000);
        m = Math.floor(time / (60 * 1000));
        time = time % (60 * 1000);
        s = Math.floor(time / 1000);
        ms = time % 1000;
        newTime = this.padTime(h, 2) + ":" + this.padTime(m, 2) 
        + ":" + this.padTime(s, 2) + "."+ this.padTime(ms, 3); 
        return newTime;
    }
    function padTime(time, size) {
        var s = "000" + time;
        return s.substr(s.length - size);
    }

    //Adding listeners to buttons
	toggle.addEventListener('click', function(event) {
		toggleBtn()
		event.preventDefault()
	})
	clear.addEventListener('click', function(event) {
		clearBtn()
		event.preventDefault()
	})















