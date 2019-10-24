var userCount = 0, compCount = 0;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const weapons = document.querySelectorAll('.weapons__item');
weapons.forEach((weapon)=>{
  weapon.addEventListener('click', checkMove);
});

const startBtn = document.querySelector('.btn');
startBtn.addEventListener('click', function(e){
  const startCover = document.querySelector('.start-screen');
  console.log(startCover);
  startCover.classList.toggle('hide');
})

function checkMove(e){
  const array1 = ['unicorn', 'donut', 'rock'];
  //Get random number for computers choice
  const rndmComp = Math.floor(Math.random() * 3);
  const userAnswer = e.target.getAttribute('data-weapon');
  const compAnswer = array1[rndmComp];

  const result = comboCheck(userAnswer, compAnswer);
  counter(result);
  console.log(result);
  //console.log('user', userAnswer, 'comp', compAnswer);
}

function comboCheck(a, b){
  if(
    (a == 'unicorn' && b == 'rock') 
    || (a == 'donut' && b == 'unicorn')
    || (a == 'rock' && b == 'donut')
  ){ //end of first if "declaration"
    return 'win';
  }else if(
    (a == 'unicorn' && b == 'donut') 
    || (a == 'donut' && b == 'rock')
    || (a == 'rock' && b == 'unicorn')
  ){ //end of second if "declaration"
   return 'loss';
  }else{
    return 'draw';
  }
}

function counter(result){
  if(result == 'win'){
    userCount++;
  }else if(result == 'loss'){
    compCount++;
  }

  if(userCount >= 5){
    console.log('you won');
    userCount = 0;
    compCount = 0;
  }

  if(compCount >= 5){
    console.log('comp won');
    userCount = 0;
    compCount = 0;
  }
}

console.log(compCount);