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

  $(".square").click(function () {
    setRandomButton();
  });
});
