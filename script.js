const AllQuestions = [{
    question: "Q1 : What is Full Stack Development?",
    a: "Working with front-end technologies",
    b: "Working with back-end technologies",
    c: "Working with database",
    d: "Working with front-end, back-end and database technologies",
    answer: "option4"
},

{
    question: `Q2 : The named character entity for a copyright symbol is?`,
    a: "©",
    b: "&nbsp;",
    c: " Not used",
    d: "©right;",
    answer: "option1"
},

{
    question: "Q3 : Which of the following is/are the possible values of animation-timing-function property. i) ease ii) ease-in iii) ease-out iv) linear",
    a: "i, iii and iv only",
    b: "ii, iii and iv only",
    c: "All",
    d: "None",
    answer: "option3"
},

{
    question: "Q4 : Presence of which file indicates that React is installed",
    a: "react.json",
    b: "gulpfile.js",
    c: " eslintrc.json",
    d: "package.json",
    answer: "option4"
},

{
    question: "Q5 : What is provided by the observables in Angular?",
    a: " listen for and respond to user-input events by Forms modules",
    b: "handle AJAX requests and responses",
    c: " Define custom events that send observable output data from a child to a parent component",
    d: "All of these",
    answer: "option4"
},

{
    question: "Q6 : Observe the following JavaScript code - var text = Hello world!; What is the value of text.substr(1,4).",
    a: "ello",
    b: "ell",
    c: "Hell",
    d: "Hello",
    answer: "option2"
}]

const eachQuestion = document.querySelector('#question');
// console.log(eachQuestion.innerText)

const option1 = document.getElementById('answer1')
const option2 = document.getElementById('answer2')
const option3 = document.getElementById('answer3')
const option4 = document.getElementById('answer4')
const option = document.querySelectorAll('.option')

const submit = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const showScore = document.getElementById("showScore")

let questionCount = 0;
//Math.floor(Math.random()*AllQuestions.length)
// let click = document.getElementById('click');
// window.addEventListener('load', ()=>{
//     console.log(questionCount);
// })

let score = 0;
const loadQuestions = () => {
    const questionList = AllQuestions[questionCount]
    eachQuestion.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestions()

const getSelectedAnswer = ()=>{
    let selectedOption;
    option.forEach(element => {
        if(element.checked){
            selectedOption = element.id;
        }
    });
    return selectedOption

}

const disSelectAll = () =>{
    option.forEach((e)=>{
        e.checked=false
    })
}

submit.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    // console.log(selectedAnswer)

    if(selectedAnswer === AllQuestions[questionCount].answer){
        score++;
    }
//    const index = questionCount;
//    AllQuestions.splice(index,1)
    questionCount++;

    disSelectAll();

    if(questionCount != AllQuestions.length ){
        loadQuestions();
    }else{
        showScore.innerHTML = `<h3>You Scored ${score} / ${AllQuestions.length}</h3><br /><br />
        <button class='btn' onclick="location.reload()">Play again</button>`
        quiz.style.display = 'none'
        showScore.classList.remove('scoreArea')
    }
})

// timer

 timer = ()=>{
    let totalTime = 300; //seconds
    let minutes = 0;
    let seconds = 0;
    let counter = 0;

    let timer1 = setInterval(() => {
        counter++;
        minutes  = Math.floor((totalTime - counter)/60);
        seconds = totalTime - (minutes * 60) - counter;
    let timerInMinutes = document.querySelector('.timerInMinutes');


    timerInMinutes.innerHTML = `${minutes > 9 ? minutes : '0' + minutes} :  ${seconds > 9 ? seconds : '0' + seconds}`

    if(counter == totalTime){
        clearInterval(timer1);
        showScore.innerHTML = `<h3>You Scored ${score} / ${AllQuestions.length}</h3>
        <button class='btn' onclick="location.reload()">Play again</button>`
        quiz.style.display = 'none'
        showScore.classList.remove('scoreArea')
    }

    },1000)
}
timer()