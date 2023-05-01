let gameRules = {
  diceNumber: 1,
  maxAttempts: 1,
};

let firstCat = {
  name: "Кекс",
  points: 0,
};

let secondCat = {
  name: "Рудольф",
  points: 0,
};

let thirdCat = {
  name: "Рокки",
  points: 0,
};

let cats = [firstCat, secondCat, thirdCat];

let runGame = function (rules, players) {
  for (
    let currentAttempt = 1;
    currentAttempt <= rules.maxAttempts;
    currentAttempt++
  ) {
    for (let i = 0; i < players.length; i++) {
      let throwResult = Math.floor(Math.random() * rules.diceNumber * 6 + 1);
      players[i].points += throwResult;
      console.log(
        players[i].name +
          " выбросил: " +
          throwResult +
          ". Общее количество очков: " +
          players[i].points
      );
    }
  }
  return players;
};

let getWinners = function (players) {
  let winners = [];
  let max = players[0];

  for (let i = 0; i < players.length; i++) {
    let currentPlayer = players[i];
    if (max.points < currentPlayer.points) {
      max = currentPlayer;
      winners = [max];
    } else if (max.points === currentPlayer.points) {
      winners.push(currentPlayer);
    }
  }
  return winners;
};

let printWinners = function (players, winners) {
  if (players.length === winners.length) {
    console.log("Все игроки как на подбор!");
    return;
  }
  message = "Победил ";
  if (winners.length > 1) {
    message = 'Победили '
  }
  for (let i = 0; i < winners.length; i++) {
    if (i > 0) {
      message += ' , '
    }
    message += winners[i].name;
  }
  message += " с количеством очков: " + winners[0].points;
  console.log(message);
};

cats = runGame(gameRules, cats);
let tops = getWinners(cats);
printWinners(cats, tops);
