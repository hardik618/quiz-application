document.addEventListener("DOMContentLoaded",()=>{

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const questions = [
        {
            question: "What is the caital of France?",
            choices: ["Paris","London","Berlin","Madrid"],
            answer: "Paris",
        },
        {
            question: "Which Planet is known as the Red Planet?",
            choices: ["Mars","Venus","Jupiter","Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote Hamlet?",
            choices: [
                "Charles Dickens",
                "Jane Ansten",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        }
    ]
    let currentQuestionIndex = 0
    let score = 0
    startBtn.addEventListener('click',startQuiz)
    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion() // this will automatically show next question choices and check of correct ans
        } else{
            // means questions are finished now show result
            showResult()
        }
    })
    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz(){
        // whenever someone starts the quiz first thing we need to do is to hide the start button we will add hidden class which says display none
        startBtn.classList.add('hidden')
        // result container also needs to be hidden
        resultContainer.classList.add('hidden')   
        // question container needs to show up
        questionContainer.classList.remove('hidden')
        showQuestion() // it will show question
    }
    function showQuestion(){
        nextBtn.classList.add("hidden")
        questionText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = "" // clear previous choices
        questions[currentQuestionIndex].choices.forEach(choice=>{
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click',()=>selectAnswer(choice)) // we dont want to execute function immediately therfore used arrow fn
            choicesList.appendChild(li)
        })
    }
    function selectAnswer(choice){
        const correctAns = questions[currentQuestionIndex].answer
        if(choice==correctAns){
            score++
        }
        nextBtn.classList.remove('hidden')
    }
    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }
});