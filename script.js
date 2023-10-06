$(document).ready(function () {
  //Function to generate random colors
  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  let colorLeft, colorCenter, colorRight;

  $(".square").click(function () {
    alert("Viereck wurde geklickt.");

    colorLeft = generateRandomColor();
    colorCenter = generateRandomColor();
    colorRight = generateRandomColor();
  });
});
