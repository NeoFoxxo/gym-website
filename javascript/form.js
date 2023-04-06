function addArticle() {
    
    // decare variables
    const form = document.getElementById('calculator');
    const fitnessgoal = document.querySelector('input[name="fit-goal"]:checked').value;
    const muscleresult = document.getElementById('muscleresult');
    const fatresult = document.getElementById('fatresult');
    const milresult = document.getElementById('milresult');
    const tryagainButton = document.getElementById('try-again');

    // make certain article visable if selected in form
    muscleresult.classList.toggle("active-block", fitnessgoal === "muscle-gain");
    fatresult.classList.toggle("active-block", fitnessgoal === "fat-loss");
    milresult.classList.toggle("active-block", fitnessgoal === "military-training")

    // change page image based on what is selected in the form
    if (fitnessgoal === "muscle-gain") {
        document.getElementById("workout-calculator-section").style.backgroundImage = "url('images/weight-lifting.jpg')";
        document.getElementById("workout-calculator-section").style.backgroundSize = "cover";
    }
    else if (fitnessgoal === "fat-loss") {
        document.getElementById("workout-calculator-section").style.backgroundImage = "url('images/diet.jpg')";
        document.getElementById("workout-calculator-section").style.backgroundSize = "cover";
    }
    else if (fitnessgoal === "military-training") {
        document.getElementById("workout-calculator-section").style.backgroundImage = "url('images/pullup.jpg')";
        document.getElementById("workout-calculator-section").style.backgroundSize = "cover";
    }
    
    // make form invisible after submission and make try again button visible
    form.classList.toggle("hidden");
    tryagainButton.classList.toggle("form-button");
    tryagainButton.classList.remove("hidden");
}    