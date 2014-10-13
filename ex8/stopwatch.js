var display = document.getElementById("display-area"),
	toggle = document.getElementById("toggle-button"),
	reset = document.getElementById("reset-button"),
	mSeconds = 0,
	seconds = 0,
	minutes = 0,
	hours = 0;

function add() {
	mSeconds++;
	if (mSeconds >= 1000) {
		mSeconds = 0;
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
	}
}

function startTimer() {
	while (hours < 2) {
		setTimeout(function(){add()}, 1);
		display.textContent = hours + ":" + minutes + ":" + seconds + ":" + mSeconds;
	}
}

function clear() {
	display.textContent = "00:00:00.000";
}

toggle.onclick = startTimer;





