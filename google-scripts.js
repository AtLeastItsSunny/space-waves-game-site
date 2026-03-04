// Google Apps Script function to serve a web app with the game

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// This function can be used to include the CSS and JS file when deploying.

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}