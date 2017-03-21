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
  document.getElementById('answer').style.opacity = '0';
  isClicked = false;
}

function nextClicked() {
  var answer = document.getElementById('answer');
  if (getComputedStyle(answer).getPropertyValue('opacity') == '0') {
    answer.style.opacity = '1';
    return;
  }
  answer.style.opacity = '0';
  document.getElementById('question').style.opacity = '0';
  setTimeout(nextQuestion, 1000);
}

function prevClicked() {

}

function init() {
  var buttons = document.getElementsByClassName('answerbutton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
  document.getElementById('resetBtn').addEventListener('click', resetClicked);
  document.getElementById('nextBtn').addEventListener('click', nextClicked);
}
init();
  
