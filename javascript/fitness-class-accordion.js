// declare variables for all articles
const bodyAttack = document.getElementById("body-attack");
const zumba = document.getElementById("zumba");
const bodyPump = document.getElementById("body-pump");
const bodyStep = document.getElementById("body-step");
const yoga = document.getElementById("yoga");
const pilates = document.getElementById("pilates");

function showBodyAttack(){

  // declare target article as variable
  const article = document.getElementById("body-attack");
  
  
  // once button is clicked make all open articles invisible
  bodyPump.style.display = "none";
  zumba.style.display = "none";
  bodyStep.style.display = "none";
  yoga.style.display = "none";
  pilates.style.display = "none";

  // if the article is not visible, make it visible
  if (article.style.display === "none") {
    article.style.display = "block";
  }

  // if the article is visible, make it invisible
  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}

function showZumba(){

  // declare target article as variable
  const article = document.getElementById("zumba");

  // once button is clicked make all open articles invisible
  bodyAttack.style.display = "none";
  bodyPump.style.display = "none";
  bodyStep.style.display = "none";
  yoga.style.display = "none";
  pilates.style.display = "none";

  // once button is clicked make all open articles invisible
  if (article.style.display === "none") {
    article.style.display = "block";
  }

  // if the article is visible, make it invisible
  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}

function showBodyPump(){

  // declare target article as variable
  const article = document.getElementById("body-pump");

  // once button is clicked make all open articles invisible
  bodyAttack.style.display = "none";
  zumba.style.display = "none";
  bodyStep.style.display = "none";
  yoga.style.display = "none";
  pilates.style.display = "none";

  // once button is clicked make all open articles invisible
  if (article.style.display === "none") {
    article.style.display = "block";
  }

  // if the article is visible, make it invisible  
  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}

function showBodyStep(){

  // declare target article as variable
  const article = document.getElementById("body-step");

  // once button is clicked make all open articles invisible
  bodyAttack.style.display = "none";
  zumba.style.display = "none";
  bodyPump.style.display = "none";
  yoga.style.display = "none";
  pilates.style.display = "none";

  // if the article is visible, make it invisible 
  if (article.style.display === "none") {
    article.style.display = "block";
  }


  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}

function showYoga(){

  // declare target article as variable
  const article = document.getElementById("yoga");

  // once button is clicked make all open articles invisible
  bodyAttack.style.display = "none";
  zumba.style.display = "none";
  bodyStep.style.display = "none";
  bodyPump.style.display = "none";
  pilates.style.display = "none";
  

  // if the article is visible, make it invisible  
  if (article.style.display === "none") {
    article.style.display = "block";
  }

  // if the article is visible, make it invisible
  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}

function showPilates(){

  // declare target article as variable
  const article = document.getElementById("pilates");

  // once button is clicked make all open articles invisible
  bodyAttack.style.display = "none";
  zumba.style.display = "none";
  bodyStep.style.display = "none";
  bodyPump.style.display = "none";
  yoga.style.display = "none";
  
  // once button is clicked make all open articles invisible
  if (article.style.display === "none") {
    article.style.display = "block";
  }

  // if the article is visible, make it invisible
  else if (article.style.display === "block") {
    article.style.display = "none";
  }

  // else make it invisible
  else {
    article.style.display = "none";
  }
}