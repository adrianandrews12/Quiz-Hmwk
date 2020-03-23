const start = document.getElementById("start");

const quiz = document.getElementById("quiz");
const intro = document.getElementById("intro");
const scoreDiv = document.getElementById("scoreContainer");
const question = document.getElementById("question")

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeBar = document.getElementById("timeBar");
const progress = document.getElementById("progression");

let questions = [
    {
        question: "The famous Hundred Years’ War in Europe was a conflict between…",
        choiceA: "England and France",
        choiceB: "France and Spain",
        choiceC: "Spain and Portugual",
        choiceD: "Norway and Russia",
        correct: "A"
    }, {
        question: "In Norse mythology, the Hall of the Slain was called…",
        choiceA: "Jotunheim",
        choiceB: "Valhalla",
        choiceC: "Hades",
        choiceD: "Hel",
        correct: "B"
    }, {
        question: "Which continent has the most wind resources?",
        choiceA: "Asia",
        choiceB: "Australia",
        choiceC: "Europe",
        choiceD: "Antartica",
        correct: "D"
    }, {
        question: "The Earth's surface area is…",
        choiceA: "510 million km2",
        choiceB: "800 million km2",
        choiceC: "10 million km2",
        choiceD: "430 million km2",
        correct: "A"
    }, {
        question: "Which language did the word “salon” come from?",
        choiceA: "Spanish",
        choiceB: "Norwegian",
        choiceC: "French",
        choiceD: "English",
        correct: "C"
    }


];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0
const questionTime = 30
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime
let timer;
let score = 0;

function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</P>";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
}


start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    intro.style.display = "none";
    renderProgress();
    renderCounter();
    timer = setInterval(renderCounter, 1000);
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion;
        qIndex++) {
        progress.innerHTML += "<footer class='prog' id=" + qIndex + " ></foooter>";
    }
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();

    } else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }

    else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function scoreRender() {
    scoreDiv.style.display = "block";

    const scorePerCent = Math.round(100 * score / questions.length);

    let img = (scorePerCent >= 80)
    scoreDiv.innerHTML = "<p>" + scorePerCent + "%</p>";
}


function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;

        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {

            clearInterval(TIMER);
            scoreRender();
        }
    }
}



