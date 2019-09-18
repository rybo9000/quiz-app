
    const QUESTIONS = {
        
        questionArray :
        
        [
            {
                question : "The Simpsons originally appeared as a short on what TV show?",
                correct : "The Tracy Ullman Show",
                answers : ["The Tracy Ullman Show", "Saturday Night Live", "The Late Show with David Letterman", "Married with Children"],
                solution : "The Simpsons debuted on April 19, 1987 as a short vignette on the Tracey Ullman Show.",
                image : "img/tracy.png"
            },
            {
                question : "Who founded Springfield?",
                correct : "Jebediah Springfield",
                answers : ["Jebediah Springfield", "Hans Skinner", "Abraham Simpson", "Shelbyville Manhattan"],
                solution : "The founder of Springfield was Jebediah Springfield in 1796.",
                image : "img/jebediah.png"
            },
            {
                question : "What are the annual Halloween episodes known as?",
                correct : "Treehouse of Horror",
                answers : ["Treehouse of Horror", "D'oh of the Dead", "Nightmare on Evergreen Terrace", "Spooktacular Simpsons"],
                solution : "The annual Halloween episodes are known as the Treehouse of Horror episodes and first aired in 1990.",
                image : "img/halloween.png"
            },
            {
                question : "What are the names of Marge's cynical twin sisters?",
                correct : "Patty & Selma",
                answers : ["Patty & Selma", "Margaret & Betty", "Becky & Thelma", "Louise & Denise"],
                solution : "Marge's twin sisters are named Patty and Selma.  They both work at the DMV.",
                image : "img/pattySelma.png"
            },
            {
                question : "What is the name of Ned Flander's store at the Springfield Mall?",
                correct : "The Leftorium",
                answers : ["The Leftorium", "Bible Blaster", "The Hi-Diddily-Ho-Mart", "The Indeedily-Doodily"],
                solution : "Ned's store is named The Leftorium and it specializes in products made especially for left handed people.",
                image : "img/leftorium.png"
            },
            {
                question : "Milhouse Van Houten is one of the few residents of Springfield with which of the following traits?",
                correct : "Eyebrows",
                answers : ["Eyebrows", "Purple Hair", "Five Fingers", "Glasses"],
                solution : "Milhouse is one of the few residents of Springfield with eyebrows.",
                image : "img/milhouse.png"
            },
            {
                question : "Which character was mistakenly animated with the wrong color in his/her first appearance?",
                correct : "Waylon Smithers",
                answers : ["Waylon Smithers", "Krusty the Clown", "Dr. Hibbert", "Marge Simpson"],
                solution : "Waylon Smithers was colorized in his first appearance as black with blue hair.",
                image : "img/smithers.png"
            },
            {
                question : "What is the name of Bart's favorite comic book action hero?",
                correct : "Radioactive Man",
                answers : ["Radioactive Man", "Mezmorino", "Bat Boy", "Fallout Boy"],
                solution : "Bart's favorite comic book hero is Radioactive Man who is based on 1960s Batman.",
                image : "img/radioactive.png"
            },
            {
                question : "Who did Marge go to high school prom with?",
                correct : "Artie Ziff",
                answers : ["Artie Ziff", "Kent Brockman", "Homer Simpson", "Lionel Hutz"],
                solution : "Marge went to prom with Artie Ziff who at one point was a software billionaire.",
                image : "img/artie.png"
            },
            {
                question : "What is the name of Mr. Burns' teddy bear?",
                correct : "Bobo",
                answers : ["Bobo", "Fluffy", "Buttons", "Stitchy"],
                solution : "Mr. Burns' teddy bear is named Bobo.  Bobo was once in the Antarctic Area and in the possession of Adolf Hitler.",
                image : "img/bobo.png"
            }
        ],
        
        score : 0,
        total : 0,
        questionNumber : 0

    };

function randomize() {
    
    // randomize question / answer order
    
}

function generateQuestion(myArray) {
    
}

function displayQuestion() {

    
    
    if (typeof QUESTIONS.questionArray[QUESTIONS.questionNumber] === 'undefined') {
        
        
        allDone();
    
    }
    
    else {
    
        increaseQuestion();
        let outputString = `
        <h3>${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].question}</h3>
        <form>
            <ul>
                <li><input type="radio" id="a" name="quiz" value="${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[0]}"> <label for="a">${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[0]}</label></li>
                <li><input type="radio" id="b" name="quiz" value="${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[1]}"> <label for="b">${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[1]}</label></li>
                <li><input type="radio" id="c" name="quiz" value="${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[2]}"> <label for="c">${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[2]}</label></li>
                <li><input type="radio" id="d" name="quiz" value="${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[3]}"> <label for="d">${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].answers[3]}</label></li>
            </ul>
            <button type="submit" id="submit" class="buttonStyle">Submit</button>
        </form>`;

        $('.mainContent').empty();
        $('.mainContent').append(outputString);
    }
    
}



function correctAnswer() {
    
    
        increaseScore();
        $('.mainContent').empty();
        $('.mainContent').append(`<div class='answer'><img src='${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].image}' id="TV"><div id="answer"><h3>CORRECT</h3><p>${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].solution}</p></div></div><form><button type='submit' class='buttonStyle' id='next'>Next</button></form>`);
}

function wrongAnswer() {
    
        $('.mainContent').empty();
        $('.mainContent').append(`<div class='answer'><img src='${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].image}' id="TV"><div id="answer"><h3>INCORRECT</h3><p>${QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].solution}</p></div></div><form><button type='submit' class='buttonStyle' id='next'>Next</button></form>`);
}

function allDone() {
    
    $('.mainContent').empty();
    
    $('.mainContent').append(`<p>All Done!  Your score is ${QUESTIONS.score}</p><p><form id="startOverForm"><button type="submit" id="startOver" class="buttonStyle">Start Over</button></form></p>`);

}

function increaseQuestion() {
    
    
    QUESTIONS.questionNumber++;
    $('#question').text(QUESTIONS.questionNumber);

}

function increaseScore() {
    
    QUESTIONS.score++;
    $('#score').text(QUESTIONS.score);

}

/*******************************************************************
 * EVENT LISTENERS
 ******************************************************************/

function checkAnswer(e) {
    
    $('.chalkboard').on('click', '#submit',(e) => {
        
        e.preventDefault();
        
        // check to verify the user has selected a radio button
        if ($(e.currentTarget).parent().find('input:checked').val()) {
        
            // if the radio button selected matches the text in questions[x].correct then run the correctAnswer() function
            if ($(e.currentTarget).parent().find('input:checked').val() === QUESTIONS.questionArray[QUESTIONS.questionNumber - 1].correct) {
                correctAnswer();
                
            }
            // if the answer is wrong run the wrongAnswer() function
            else {
                wrongAnswer();
            }

        }

        else {
            alert("Select an answer!!!");
        }
    })

}

function start() {
    
    $('#question').text(QUESTIONS.questionNumber + 1);
    $('#total').text(QUESTIONS.questionArray.length);

    $('#start').on('click', (e) => {
        
        e.preventDefault();
        $('#start').hide();
        displayQuestion();

    })
}

function startOver() {
    $('.chalkboard').on('click', '#startOver',(e) => {
        e.preventDefault();
        QUESTIONS.score = 0;
        QUESTIONS.questionNumber = 0;
        $('#question').text("1");
        $('#score').text("0");
        $('.mainContent').empty();
        displayQuestion();
    })
}

function next() {
    $('.chalkboard').on('click', '#next',(e) => {
        e.preventDefault();
        $('.mainContent').empty();
        displayQuestion();
    })
}

/*******************************************************************
 * END OF EVENT LISTENERS
 ******************************************************************/

function handler() {
    
    start();
    checkAnswer();
    startOver();
    next();

}

$(handler());
