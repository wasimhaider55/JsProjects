const questions = [ {
        "que": "Which of the following is a client site language?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "JavaScript",
        "correct": "d",
    },
    {
        "que": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a",
    },
    {
        "que": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
    {
        "que": "What does CSS stands for?",
        "a": "Hypertext Markup Language",
        "b": "Cascading Style Sheet",
        "c": "Jason Object Notation",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "b",
    }
];
 let index = 0;
 let total = questions.length;
 let right = 0;
 let wrong = 0;
 const quebox = document.getElementById("quebox");
 const questionInput = document.querySelectorAll(".options");
const loadQuestion = () =>{
    if (index === total) { 
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quebox.innerText =  `${index + 1})  ${data.que}`; // ES6 feature 
    questionInput[0].nextElementSibling.innerText = data.a;
    questionInput[1].nextElementSibling.innerText = data.b;
    questionInput[2].nextElementSibling.innerText = data.c;
    questionInput[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if ( ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer ;
    questionInput.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;

}

const reset = () => {
    questionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML =  `
    <h3> Thank you for Playing the Quiz   </h3>
    <h2> ${right} / ${total}  are Correct   </h2>
    `
}

loadQuestion();