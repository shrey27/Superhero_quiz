const chalk = require('chalk');

var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question(chalk.white.bold.bgBlue("What's your name? "));
console.log(chalk.green.bold("Hello, "+userName+"..!!"));
console.log(chalk.white.bold.bgRedBright("Welcome to the superhero trivia, \n"));


var highscore = [
  {
    name: "RX-100",
    score:10
  },
  {
    name: "PX-90",
    score:9
  },
  {
    name: "DS-80",
    score:8
  },
  {
    name: "RU-70",
    score:7
  },
  {
    name: "BT-60",
    score:6
  }
]
var questions = [
{
  question:"Which superhero battles Dr. Octopus?\na:Spiderman\nb:Batman\nc:Superman\nd:Aquaman\n",
  answer:'a'
},
{ 
  question:'Which superhero fought against Darkseid?  \na:SuperGirl\nb:Wonder Woman\nc:Gamora\nd:Scarlett Witch\n',
  answer:'b'
},
{ 
  question:'Which among the following is aka web crawler?\na:Spiderman\nb:Batman\nc:Superman\nd:Aquaman\n',
  answer:'a'
},
{ 
  question:'Which superhero holds the The Trident?\na:Spiderman\nb:Batman\nc:Superman\nd:Aquaman\n',
  answer:'d'
},
{ 
  question:'Which superhero is part of the Guradians of the galaxy ?\na:SuperGirl\nb:Wonder Woman\nc:Gamora\nd:Scarlett Witch\n',
  answer:'c'
},
{ 
  question:"DC's strongest superhero ?\na:Spiderman\nb:Batman\nc:Superman\nd:Aquaman\n",
  answer:'c'
},
{
  question:'Which superhero possess Lasso of Truth?\na:SuperGirl\nb:Wonder Woman\nc:Gamora\nd:Scarlett Witch\n',
  answer:'b'
},
{
  question:'Who is cousin of Clark Kent?\na:SuperGirl\nb:Wonder Woman\nc:Gamora\nd:Scarlett Witch\n',
  answer:'a'
},
{
  question:'The archnemesis of Shazam?\na:Black Adam\nb:Hulk\nc:Hercules\nd:Flash\n',
  answer:'a'
},
{
  question:'Who is daughter of Thanos?\na:SuperGirl\nb:Wonder Woman\nc:Gamora\nd:Scarlett Witch\n',
  answer:'c'
},
{
  question:"Marvel's strongest superhero?\na:Black Adam\nb:Hulk\nc:Hercules\nd:Flash\n",
  answer:'b'
},
{
  question:"Which superhero's real identity is 'Bruce Wayne'?\na:Spiderman\nb:Batman\nc:Superman\nd:Aquaman\n",
  answer:'b'
}
];

var level = 1,last_score = 0;

function play(question, answer) {
  var ans = readlineSync.question(chalk.cyanBright(question));
  last_score = score;
  if (ans === answer) { 
    console.log(chalk.green("right!"));
    score += 1;    
  } 
  else {
    console.log(chalk.red("wrong!"));
    score -= 1;
  }

    if(score===3 && last_score<3) 
    {
      ++level;
      console.log(chalk.black.bgYellowBright("Level Up...!!!"));
    }
    else if(score===7 && last_score<7)
    {
      ++level;
      console.log(chalk.black.bgYellowBright("Level Up...!!!"));
    }
    else if(score===2 && last_score>2)
    {
      --level;
      console.log(chalk.white.bgRedBright("Level Down...!!!"));
    }
    else if(score===6 && last_score>6)
    {
      --level;
      console.log(chalk.white.bgRedBright("Level Down...!!!"));
    }
    else{
      console.log("=========================")
    }

    console.log(chalk.black.bgGreen("current score: ", score));
    console.log("=========================")
  
}

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.white.bgBlue("Quiz is complete "));
console.log(chalk.white.bgRed("Your score is ",score));

for(var i=0; i<highscore.length; i++)
{
  var cur_user = highscore[i];
  if(cur_user.score<score)
  {
    console.log(chalk.green.bold.italic("YAY..!! You have broken the record "));
  }
  break;
}

