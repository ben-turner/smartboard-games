var isClicked = false;

function buttonClick() {
  if (isClicked) 
    return
  isClicked = true;
  this.style.backgroundColor = 'green';
}

function resetClicked() {
  var buttons = document.getElementsByClassName('answerbutton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'red';
  }
  isClicked = false;
}

function init() {
  var buttons = document.getElementsByClassName('answerbutton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
  document.getElementById('resetBtn').addEventListener('click', resetClicked);
}
init();
  
