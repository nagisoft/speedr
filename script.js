
var settings = document.querySelector('#settings');
var text = document.querySelector('#text');
var wpm = document.querySelector('#wpm');
var reader = document.querySelector('#reader');

var words, speed, current, interval;


var end = function () {
	clearInterval(interval);
};

var stop = function (event) {

	if (event.target.id !== 'stop') return;

	end();

};

var run = function () {

	settings.removeAttribute('open');

	interval = setInterval(function () {

		if (!words[current]) {
			end();
			return;
		}

		reader.textContent = words[current];

		current++;

	}, speed);

};

var start = function (event) {

	if (event.target.id !== 'start') return;

	if (!text.value.length) return;

	words = text.value.split(' ').filter(function (word) {
		return word.length;
	});

	speed = (60 / parseInt(wpm.value, 10)) * 1000;

	current = 0;

	run();

};


var clickHandler = function (event) {
	start(event);
	stop(event);
};

document.addEventListener('click', clickHandler);
document.onload =settings.setAttribute('open','true');