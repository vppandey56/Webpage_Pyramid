function generatePyramid() {
  const pyramidHeight = document.getElementById("heightInput").value;
  const pyramid = document.getElementById("pyramid");
  let pyramidHTML = "";

  for (let i = 1; i <= pyramidHeight; i++) {
    for (let j = 1; j <= pyramidHeight - i; j++) {
      pyramidHTML += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      pyramidHTML += "*";
    }

    pyramidHTML += "<br/>";
  }

  pyramid.innerHTML = pyramidHTML;
}
