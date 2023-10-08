$(document).ready(function () {
  //Function to generate random colors
  function generateRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  //Function to determine lightness of random color
  function calculateLightness(hex) {
    // Entfernen Sie das #-Zeichen, falls es vorhanden ist
    hex = hex.replace(/^#/, "");

    // Überprüfen Sie die Gültigkeit des HEX-Werts
    if (hex.length !== 3 && hex.length !== 6) {
      throw new Error("Ungültiger HEX-Wert");
    }

    // Wenn der HEX-Wert eine verkürzte Form (z.B. #123) ist, erweitern Sie ihn
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Parsen Sie die HEX-Werte in Dezimalzahlen
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    // Berechnen Sie den Helligkeitswert (Lightness) nach der Formel:
    // Lightness = (R + G + B) / 2
    let lightness = (r + b + g) / 3;

    // Geben Sie den Helligkeitswert zurück
    return lightness;
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
    $("#start-button").css("borderColor", bodyColor);
    $("#start-button").css("backgroundColor", bodyColor);

    if (calculateLightness(bodyColor) > 127) {
      $("#start-button").css("color", "black");
    } else {
      $("#start-button").css("color", "white");
    }
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
