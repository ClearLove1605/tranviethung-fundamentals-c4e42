let dom = function(id){
    return document.getElementById(id);
}
let positionTop = 0;
let positionLeft = 0;
let box = dom('box');
box.style.left = '0px';
box.style.right = '0px';

let moveUp = dom('up');
let moveDown = dom('down');
let moveLeft = dom('left');
let moveRight = dom('right');

moveUp.addEventListener('click', function() {
	positionTop -= 10;
	box.style.top = `${positionTop}px`
});

moveDown.addEventListener('click', function() {
	positionTop += 10;
	box.style.top = `${positionTop}px`
});

moveLeft.addEventListener('click', function() {
	positionLeft -= 10;
	box.style.left = `${positionLeft}px`
});

moveRight.addEventListener('click', function() {
	positionLeft += 10;
	box.style.left = `${positionLeft}px`
});