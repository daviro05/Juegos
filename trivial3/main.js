function triv() {
    var home = document.querySelector(".home"),
      waitScreen = document.querySelector(".wait"),
      proTIP = document.querySelector(".protip"),
      normalUI = document.querySelector(".normalUI"),
      question = document.querySelector(".question"),
      choice1 = document.querySelector(".choiceA"),
      choice2 = document.querySelector(".choiceB"),
      choice3 = document.querySelector(".choiceC"),
      score = 0,
      gamescore = document.querySelector(".gameScore"),
      correctTxt = document.querySelector(".correct"),
      incorrectTxt = document.querySelector(".incorrect"),
      overScreen = document.querySelector(".gameOver"),
      affirm = document.querySelector(".affirmation"),
      yourPoints = document.querySelector(".pnts");
  
    setInterval(function() {
      gamescore.innerHTML = score;
    }, 50);
  
    var tips = [
      "Pro Tip: Answer as quickly as possible!",
      "Pro Tip: Study to get higher scores!",
      "Pro Tip: If you don't know something, go with your guts!",
      "Pro Tip: Questions can repeat, so pay attention!",
      "Who Knew? The singular of 'trivia' is 'trivium'",
      "Who Knew? Crossing a zebra and a donkey yields a zonkey",
      "Who Knew? Humans laugh an average of 15 times a day",
      "Who Knew? Pagophagiacs are people who love eating ice"
    ];
  
    var questions = [
      "Which country is famously known to look like a boot?",
      "Which of the following is not one of the Olympic ring colors?",
      "Which of the following is a Marvel Comics superhero?",
      "There's a word for the day after tomorrow. What is it?",
      "What is the second lowest prime number?",
      "How many red stripes are on the American Flag?",
      "Stephen King did not write which book?",
      "Who won the 1989 Super Bowl?",
      "What are the names of the Steve Jobs's foster parents?",
      "Nauru is a ...",
      "Which mathematician is responsible for the laws of gravity?",
      "Which actors was famous for the phrase 'nanoo nanoo'?",
      "Which country hosted the first Winter Olympic Games?",
      "Amelia Earhart disappeared over what ocean?",
      "What year was JFK assasinated?",
      "Which of the following is a leap year?",
      "Steve Wozniak is a founder of what company?",
      "In 2018, Lionel Messi played for which country",
      "X.com, founded by Elon Musk, was later known as what?",
      "Famous wrestler John Cena was born in whcih US state?",
      "What is the square root of 3136?",
      "What are the two colors of the New York Jets?",
      "What was the length of the RMS Titanic?",
      "How many golf clubs are allowed in your bag during a tournament?",
      "Gold, AU, is what number on the Periodic Table?",
      "The german scientist who created the X-Ray name was ...",
      "Coca Cola's original color was ....",
      "The NBA logo silohouettes which basketball player?",
      "How many keys are on a standard piano?",
      "Allen Brooks voices which character in Disney's Nemo?",
      "What does the DC in DC comics stand for?",
      "Spell the word that concluded the 2017 Scripps National Spelling Bee"
    ];
    var answers = [
      ["Italy", "Chile", "Singapore"],
      ["Black", "Blue", "Orange"],
      ["Batman", "Falcon", "Juggernaut"],
      ["Overmorrow", "Postmorrow", "Aftermorrow"],
      ["One", "Two", "Three"],
      ["Six", "Eight", "Seven"],
      ["The Shining", "The Raven", "Misery"],
      ["The 49ers", "Patriots", "Raiders"],
      ["Paul and Clara", "John and Mary", "Chris and Kerry"],
      ["State", "City", "Country"],
      ["Isaac Newton Jr.", "Isaac Newton Sr", "Neither"],
      ["Gary Cooper", "Robin Williams", "Bing Crosby"],
      ["England", "France", "Russia"],
      ["The Pacific", "The Atlantic", "The Indian"],
      ["1957", "1961", "1963"],
      ["2016", "2022", "2030"],
      ["Apple", "Microsoft", "Yahoo!"],
      ["Brazil", "Spain", "Argentina"],
      ["Uber", "Alibaba", "PayPal"],
      ["Wisconsin", "Massachussets", "Georgia"],
      ["66", "56", "46"],
      ["Green and White", "Blue and Yellow", "Orange and Red"],
      ["1098'", "984'", "883'"],
      ["14", "17", "19"],
      ["65", "79", "86"],
      ["Georg Kummer", "Denis Bönsch", "Wilhelm Röntgen"],
      ["Blue", "Green", "Brown"],
      ["Jerry West", "Lary Bird", "Michael Jordan"],
      ["88", "82", "76"],
      ["Nemo", "Phillip Sherman", "Marlin"],
      ["Daily Comics", "Detective Comics", "Dangerous Comics"],
      ["Marocain", "Marocane", "Mairocan"]
    ];
    var answers2answers = [
      1,
      3,
      2,
      1,
      3,
      3,
      2,
      1,
      1,
      3,
      2,
      2,
      2,
      1,
      3,
      1,
      1,
      3,
      3,
      2,
      2,
      1,
      3,
      1,
      2,
      3,
      2,
      1,
      1,
      3,
      2,
      1
    ];
  
    function PlayNormal() {
      setTimeout(function() {
        document.querySelector(".time").style.animation =
          "timeCheck 40s infinite linear";
      }, 4000);
  
      var r,
        correct,
        newTip = Math.floor(Math.random() * tips.length);
      proTIP.innerHTML = tips[newTip];
      home.style.width = "0";
  
      setTimeout(function() {
        normalUI.style.width = "100%";
      }, 200);
  
      setTimeout(function() {
        waitScreen.style.top = "-200%";
      }, 5000);
  
      var questionsAsked = [];
  
      function newR() {
        r = Math.floor(Math.random() * questions.length);
  
        question.innerHTML = questions[r];
        choice1.innerHTML = answers[r][0];
        choice2.innerHTML = answers[r][1];
        choice3.innerHTML = answers[r][2];
        correct = answers2answers[r];
  
        choice1.style.zIndex = "1";
        choice2.style.zIndex = "1";
        choice3.style.zIndex = "1";
  
        questions.splice(r, 1);
        answers.splice(r, 1);
        answers2answers.splice(r, 1);
  
        correctTxt.style.fontSize = "0";
        incorrectTxt.style.fontSize = "0";
  
        normalUI.style.background = "#262626";
      }
  
      newR();
  
      choice1.addEventListener("click", function() {
        if (correct == 1) {
          score += 500;
          correctTxt.style.fontSize = "1800%";
          normalUI.style.background = "#009900";
        } else if (correct == 2 || correct == 3) {
          score -= 250;
          incorrectTxt.style.fontSize = "1800%";
          normalUI.style.background = "#cc0000";
        }
        choice1.style.zIndex = "-1";
        choice2.style.zIndex = "-1";
        choice3.style.zIndex = "-1";
  
        setTimeout(newR, 1000);
      });
  
      choice2.addEventListener("click", function() {
        if (correct == 2) {
          score += 500;
          correctTxt.style.fontSize = "1800%";
          normalUI.style.background = "#009900";
        } else if (correct == 1 || correct == 3) {
          score -= 250;
          incorrectTxt.style.fontSize = "1800%";
          normalUI.style.background = "#cc0000";
        }
        choice1.style.zIndex = "-1";
        choice2.style.zIndex = "-1";
        choice3.style.zIndex = "-1";
  
        setTimeout(newR, 1000);
      });
  
      choice3.addEventListener("click", function() {
        if (correct == 3) {
          score += 500;
          correctTxt.style.fontSize = "1800%";
          normalUI.style.background = "#009900";
        } else if (correct == 1 || correct == 2) {
          score -= 250;
          incorrectTxt.style.fontSize = "1800%";
          normalUI.style.background = "#cc0000";
        }
        choice1.style.zIndex = "-1";
        choice2.style.zIndex = "-1";
        choice3.style.zIndex = "-1";
  
        setTimeout(newR, 1000);
      });
  
      setTimeout(function() {
        overScreen.style.left = 0;
  
        if (score >= 4500) {
          overScreen.style.background = "#00ff7f";
          affirm.innerHTML = "Awesome!";
        } else if (score >= 2500) {
          overScreen.style.background = "#7647a2";
          affirm.innerHTML = "OK!";
        } else if (score < 2500) {
          overScreen.style.background = "#ff6666";
          affirm.innerHTML = "Whoops!";
        }
  
        yourPoints.innerHTML = score;
      }, 44000);
  
      setTimeout(function() {
        normalUI.style.top = "-200%";
        overScreen.style.left = "-100%";
        location = location;
      }, 52000);
    }
    PlayNormal();
  }
  
  function newLearn() {
    var lever = document.querySelector(".leverHandle"),
      machine = document.querySelector(".trivMachine"),
      macMouth = document.querySelector(".mouth"),
      leftEye = document.querySelector(".l"),
      rightEye = document.querySelector(".r"),
        theFact = document.querySelector(".trivFact"),
        factTxt = document.querySelector(".factTxt"),
        blocker = document.querySelector(".blockOff");
    
    var fax = [
      "Triskaidekaphobia is the fear of the number 13",
      "Arm-fall-off-boy is a superhero in the DC universe who can take off his arm",
      "The world's longest word is 189,819 letters long and is the name of a giant protein",
      "112-year-old Masazō Nonaka of Japan, born 25 July 1905, is the world's oldest living man",
      "Coca-Cola's original color was green and was meant to be medicine",
      "A regular guitar has only six strings",
      "Aircraft black boxes are suprisingly colored orange",
      "New Zealand's 90 mile beach is only 55 miles long",
      "The Spanish Flu did not originate in a Spanish-speaking country. It was the USA",
      "Russia celebrates its October Revolution every November",
      "The 100 year war did not last 100 years. It lasted 116 years",
      "The purple finch is ironically colored red",
      "The longest chess game in a tournament took 269 moves and was 20 hours long",
      "'Fresh Guacamole' was the shortest movie that was nominated for an Oscar at only 100 seconds",
      "SOS does not mean anything. It's just a sign for help"
    ]
    
    var rFact = Math.floor(Math.random()*fax.length);
  
    lever.style.transform = "rotate(70deg)";
  
    setTimeout(function() {
      lever.style.transform = "rotate(-70deg)";
    }, 1000);
    
    leftEye.style.animation = "0.5s bop infinite alternate";
    rightEye.style.animation = "0.5s bop infinite alternate";
    macMouth.style.boxShadow =
      "-1vw 0vw #00ff7f, 1vw 0vw #00ff7f";
    rightEye.style.animationDelay = "0.5s";
    
    setTimeout(function(){
      leftEye.style.animation = "";
      rightEye.style.animation = "";
      macMouth.style.boxShadow = "-1vw 0vw #00ff7f, -2vw 0vw #00ff7f, 1vw 0vw #00ff7f, 2vw 0vw #00ff7f, 0vw 1vw #00ff7f, -1vw 1vw #00ff7f, 1vw 1vw #00ff7f";
      document.querySelector(".barrel").style.animation = "shoot 1s";
      machine.style.animation = "jump 0.8s";
      theFact.style.transform = "scale(1)";
      blocker.style.display = "block";
    }, 3000);
    
    theFact.addEventListener("click", function(){
      theFact.style.transform = "scale(0)";
      blocker.style.display = "block";
    });
    
    factTxt.innerHTML = fax[rFact];
  }
  
  function learn() {
    document.querySelector(".learnUI").style.display = "block";
    
    document.querySelector(".learnOut").addEventListener("click", function(){
      document.querySelector(".learnUI").style.display = "none";
    });
  }
  