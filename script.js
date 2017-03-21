var isClicked = false
  , questions = []
  ;

function loadFile() {
  var reader = new FileReader();
  reader.onload = parseFile;
  reader.readAsText(this.files[0]);
}

function parseFile(e) {
  var lines = e.target.result.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var l = lines[i].split(',');
    questions.push([l[0], l[1]]);
  }
  document.getElementById('loader-wrapper').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  nextQuestion();
}

function nextQuestion() {
  var question = questions.shift();
  var questionEl = document.getElementById('question')
  questionEl.innerHTML = '<h1>'+question[0]+'</h1>';
  reset();
  questionEl.style.opacity = '1';
  document.getElementById('answer').innerHTML = '<h1>'+question[1]+'</h1>';
}

function buttonClick() {
  if (isClicked) 
    return
  isClicked = true;
  this.style.backgroundColor = 'green';
}

function reset() {
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

function init() {
  document.getElementById('fileSelector').addEventListener('change', loadFile);
  var buttons = document.getElementsByClassName('answerbutton');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
  document.getElementById('resetBtn').addEventListener('click', reset);
  document.getElementById('nextBtn').addEventListener('click', nextClicked);
}
init();
  
