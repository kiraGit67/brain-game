$(document).ready(function () {
  //Function to generate random colors
  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  //Function to generate a random Int between 0 and 2
  function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let colorLeft, colorCenter, colorRight, randInt, bodyColor;
  let gameStarted = true;
  let score = 0;

  //function to set the background-color of body, main element and .square elements to black
  function setAllBlack() {
    $("body").css("background-color", "black");
    $("main").css("background-color", "black");
    $(".square").css("background-color", "black");
  }

  //Game Over function
  function gameOver() {
    gameStarted = false;

    if (score > 0) {
      $("#start-button").text(
        `Du hast ${score} Punkte erreicht. Klicke hier, um neu zu starten.`
      );
      $("#start-button").css("background-color", "red");
      $("#start-button").css("border-color", "red");
      $("#start-button").css("color", "black");
      $("#start-button").css("fontSize", "120%");
      setAllBlack();
    } else {
      $("#start-button").text("Klicke hier, um das Spiel zu starten.");
    }

    score = 0;
  }

  //Put .square.click functionality into extern function
  function setRandomButton() {
    colorLeft = generateRandomColor();
    colorCenter = generateRandomColor();
    colorRight = generateRandomColor();

    $("#left-square").css("backgroundColor", colorLeft);
    $("#center-square").css("backgroundColor", colorCenter);
    $("#right-square").css("backgroundColor", colorRight);

    randInt = generateRandomInt(0, 2);

    switch (randInt) {
      case 0:
        bodyColor = colorLeft;
        break;
      case 1:
        bodyColor = colorCenter;
        break;
      default:
        bodyColor = colorRight;
    }

    $("body").css("backgroundColor", bodyColor);
    $("#start-button").css("backgroundColor", bodyColor);
    $("#start-button").css("borderColor", bodyColor);
    $("#start-button").css("color", "white");
  }

  setRandomButton();

  // function to start the game new
  $("#start-button").click(function () {
    if (gameStarted === false) {
      //start game function
      startGame();
    }
  });

  function startGame() {
    gameStarted = true;
    score = 0;
    setRandomButton();
    $("#start-button").text(`Deine Punktzahl beträgt ${score}.`);
    $("#start-button").css("background-color", "green");
    $("#start-button").css("border-color", "green");
    $("#start-button").css("color", "white");
    $("#start-button").css("fontSize", "2rem");
    $("main").css("backgroundColor", "white");
  }

  $(".square").click(function () {
    // function for clicking .square elements
    if (gameStarted) {
      if ($(this).attr("id") === "left-square") {
        if (randInt === 0) {
          score++;
          $("#start-button").text("Deine Punktzahl beträgt " + score);
          setRandomButton();
        } else {
          gameOver();
        }
      } else if ($(this).attr("id") === "center-square") {
        if (randInt === 1) {
          score++;
          $("#start-button").text("Deine Punktzahl beträgt " + score);
          setRandomButton();
        } else {
          gameOver();
        }
      } else if ($(this).attr("id") === "right-square") {
        if (randInt === 2) {
          score++;
          $("#start-button").text("Deine Punktzahl beträgt " + score);
          setRandomButton();
        } else {
          gameOver();
        }
      }
    }
  });
});
