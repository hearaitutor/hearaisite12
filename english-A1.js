function startLesson(lesson) {
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("lesson-card").style.display = "block";

    if (lesson === 'lesson1') {
        loadLesson1();
    } else if (lesson === 'lesson2') {
        loadLesson2();
    }else if (lesson === 'lesson3') {
        loadLesson3();
    }

    showTheory(); // Сначала показываем теорию, потом задания
}

function showTheory() {
    document.getElementById("lesson-card").style.display = "block"; // Показываем карточку с теорией
    document.getElementById("task-container").style.display = "none"; // Скрываем задания

    const lessonCard = document.getElementById("lesson-card");
    const startTasksButton = document.createElement("button");
    startTasksButton.innerText = "Начать задания";
    startTasksButton.onclick = showTasks;
    startTasksButton.style.marginTop = "20px";

    if (!document.querySelector("#lesson-card button")) {
        lessonCard.appendChild(startTasksButton);
    }
}


function loadLesson1() {
    document.getElementById("theory-content").innerHTML = `
        <h2>1. nodarbība: Sveicieni un Ievads</h2>
        <p>Šeit ir šīs nodarbības teorija:</p>
        <ul>
            <li>Hello – Sveiki</li>
            <li>Hi – Čau</li>
            <li>Good morning – Labrīt</li>
            <li>Good afternoon – Labdien</li>
            <li>Goodbye – Uz redzēšanos</li>
            <li>See you later – Tiksimies vēlāk</li>
            <li>My name is… – Mans vārds ir…</li>
            <li>What is your name? – Kā tevi sauc?</li>
            <li>Nice to meet you – Prieks iepazīties</li>
        </ul>
        <p>Likumi:</p>
        <ul>
        <li>Visbiežāk lietotie apsveikumi angļu valodā ir Hello vai Hi.</li>
        <li>Pieklājīgām situācijām vēlams izmantot Good morning, Good afternoon vai Goodbye.</li>
        </ul>
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "Ko nozīmē 'Hello'?",
            options: [
                { text: "Uz redzēšanos", correct: false },
                { text: "Sveiki", correct: true },
                { text: "Labrīt", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Ko nozīmē 'Goodbye'?",
            options: [
                { text: "Labrīt", correct: false },
                { text: "Uz redzēšanos", correct: true },
                { text: "Tiksimies vēlāk", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Uzrakstiet tulkojumu:",
            questions: [
                { text: "Nice to meet you", answer: "Prieks iepazīties" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo: '______ is David.'",
            options: [
                { text: "My name", correct: true },
                { text: "Hello", correct: false },
                { text: "Nice to meet you", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Kurš no šiem tulkojumiem ir 'Good afternoon'?",
            options: [
                { text: "Čau", correct: false },
                { text: "Sveiki", correct: false },
                { text: "Labdien", correct: true }
            ]
        },
        {
            type: "findError",
            title: "Atrodiet kļūdu:",
            questions: [
                {
                    text: "1. Hai, how are you?",
                    options: ["Hai", "how", "are", "you"],
                    correct: "Hai"
                },
                {
                    text: "2. Goodby! See you later.",
                    options: ["Goodby", "See", "you", "later"],
                    correct: "Goodby"
                }
            ]
        },
        {
            type: "multipleChoice",
            question: "'Hi' ir oficiāls sveiciens angļu valodā.",
            options: [
                { text: "Taisnība", correct: false },
                { text: "Nepatiess", correct: true},
            ]
        },
        {
            type: "writeTranslation",
            title: "Uzrakstiet tulkojumu:",
            questions: [
                { text: "Good morning", answer: "Labrīt" },
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo:",
            questions: [
                { text: "______ is John.", answer: "My name" },
            ]
        },
    ];
    showTasks(); // Переход к заданиям этого урока
}

function loadLesson2() {
    document.getElementById("theory-content").innerHTML = `
        <h2>2. nodarbība: Skaitļi un Vecums</h2>
        <p>Jauni vārdi un izteicieni:</p>
        <ul>
            <li>One – Viens</li>
            <li>Two - Divi</li>
            <li>Three - Trīs</li>
            <li>Four – Četri</li>
            <li>Five – Pieci</li>
            <li>How old are you? – Cik tev ir gadu?</li>
            <li>I am … years old – Man ir … gadi</li>
            <li>Zero – Nulle</li>
            <li>Ten – Desmit</li>
        </ul>
        <p>Likumi:</p>
        <ul>
            <li>Angļu valodā, lai jautātu vecumam, tiek lietota frāze: How old are you?</li>
            <li>Atbilde tiek konstruēta, izmantojot izteicienu I am … years old.</li>
        </ul>
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "Tulkojiet vārdu 'Two'",
            options: [
                { text: "Trīs", correct: false },
                { text: "Viens", correct: false },
                { text: "Divi", correct: true }
            ]
        },
        {
            type: "multipleChoice",
            question: "Tulkojiet frāzi 'I am five years old'",
            options: [
                { text: "Man ir pieci gadi", correct: true },
                { text: "Es pieci gadi", correct: false },
                { text: "Man ir divi gadi", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Tulkojiet angļu valodā:",
            questions: [
                { text: "Foor (četri)", answer: "Four" },
            ]
        },
        {
            type: "writeTranslation",
            title: "Tulkojiet angļu valodā:",
            questions: [
                { text: "Ziro (nulle)", answer: "Zero" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Tulkojiet vārdu 'three'",
            options: [
                { text: "Četri", correct: false },
                { text: "Trīs", correct: true },
                { text: "Pieci", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Tulkojiet frāzi",
            questions: [
                { text: "How old are you?", answer: "Cik tev ir gadu?" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Tulkojiet vārdu 'viens'",
            options: [
                { text: "Three", correct: false },
                { text: "One", correct: true },
                { text: "Ten", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo:'Man ir pieci gadi'",
            questions: [
                { text: "I am ______ years old.", answer: "five" },
            ]
        },
        {
            type: "writeTranslation",
            title: "Uzrakstiet jautājumu angļu valodā.",
            questions: [
                { text: "Cik tev gadi?", answer: "How old are you?" },
            ]
        },
        {
            type: "findError",
            title: "Izvēlieties nepareizi uzrakstīto vārdu:",
            questions: [
                {
                    text: "I am tree years old",
                    options: ["I am", "tree", "years", "old"],
                    correct: "tree"
                },
                {
                    text: "How old you are?",
                    options: ["How", "old", "you are"],
                    correct: "you are"
                }
            ]
        },
    ];
    showTasks(); // Переход к заданиям этого урока
}

function loadLesson3() {
    document.getElementById("theory-content").innerHTML = `
        <h2>3. nodarbība: Darbības vārds “to be”</h2>
        <p>Darbības vārds “to be” tiek tulkots kā “būt”, “rādīties” vai “būt”.</p>
        <p>Tas mainās atkarībā no tēmas:</p>
        <ul>
            <li>I am – Es esmu</li>
            <li>You are – Tu esi</li>
            <li>He/She/It is – Viņš/Viņa/Tas ir</li>
            <li>We are – Mēs esam</li>
            <li>You are – Jūs esat</li>
            <li>They are – Viņi/Viņas ir</li>
        </ul>
        <p>Piemēri teikumiem:</p>
        <ul>
            <li>I am a student. – Es esmu students.</li>
            <li>You are my friend. – Tu esi mans draugs.</li>
            <li>She is happy. – Viņa ir laimīga.</li>
        </ul>
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'I __ a student'",
            options: [
                { text: "is", correct: false },
                { text: "am", correct: true },
                { text: "are", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'She __ happy'",
            options: [
                { text: "is", correct: true },
                { text: "am", correct: false },
                { text: "are", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'He __ my dad'",
            options: [
                { text: "is", correct: true },
                { text: "am", correct: false },
                { text: "are", correct: false }
            ]
        },
        {
        type: "findError",
        title: "Izvēlieties nepareizi uzrakstīto vārdu:",
        questions: [
            {
                text: "I is a student.",
                options: ["I", "is", "a student",],
                correct: "is"
            },
            {
                text: "She are my sister.",
                options: ["She", "are", "my sister"],
                correct: "are"
            },
                ],
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet teikumu: 'It __ red'",
            options: [
                { text: "is", correct: true },
                { text: "am", correct: false },
                { text: "are", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo lauku:",
            questions: [
                { text: "I ___ a teacher.", answer: "am" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'They __ friends'",
            options: [
                { text: "is", correct: false },
                { text: "am", correct: false },
                { text: "are", correct: true }
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo lauku:",
            questions: [
                { text: "They ___ happy. ", answer: "are" },
            ]
        },
    ];
    showTasks(); // Переход к заданиям этого урока
}

function loadLesson4() {
    document.getElementById("theory-content").innerHTML = `
        <h2>4. nodarbība: Nobeiguma apskats</h2>
        <p>Apskatīsim galvenās tēmas no iepriekšējām nodarbībām:</p>
        <ul>
            <li>1. nodarbība: Sveicieni un Ievads.</li>
            <li>2. nodarbība: Skaitļi un Vecums.</li>
            <li>3. nodarbība: Darbības vārds “to be”.</li>
        </ul>
        <p>Mēģiniet atbildēt uz jautājumiem un pārbaudiet savas zināšanas!</p>
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "Kāds ir 'Viens' tulkojums angļu valodā?",
            options: [
                { text: "One", correct: true },
                { text: "Two", correct: false },
                { text: "Three", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Izvēlieties 'Mēs esam' pareizo 'to be' formu:",
            options: [
                { text: "He is", correct: false },
                { text: "You are", correct: false },
                { text: "We are", correct: true }
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'Hello! ______ is John.'",
            options: [
                { text: "You are", correct: false },
                { text: "I am", correct: false },
                { text: "My name", correct: true }
            ]
        },
        {
            type: "multipleChoice",
            question: "Kāds ir 'Prieks iepazīties' tulkojums?",
            options: [
                { text: "How old are you?", correct: false },
                { text: "Nice to meet you", correct: true },
                { text: "Goodbye", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo lauku:",
            questions: [
                { text: "______ old are you?", answer: "How" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Fill in the blank: 'I ___ a teacher.'",
            options: [
                { text: "is", correct: false },
                { text: "am", correct: true },
                { text: "are", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Tulko teikumu angļu valodā:",
            questions: [
                { text: "Man ir desmit gadi", answer: "I am ten years old" },
            ]
        },
        {
            type: "multipleChoice",
            question: "Aizpildiet tukšo lauku: 'Good morning! ______ name is Anna.'",
            options: [
                { text: "I am", correct: false },
                { text: "My", correct: true },
                { text: "He", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "Izvēlieties pareizo skaitļa tulkojumu: 'Pieci' ir ______.",
            options: [
                { text: "Four", correct: false },
                { text: "Three", correct: false },
                { text: "Five", correct: true }
            ]
        },
        {
            type: "writeTranslation",
            title: "Tulko teikumu angļu valodā:",
            questions: [
                { text: "Man ir trīs gadi.", answer: "I am three years old" },
            ]
        },
    ];
    showTasks(); // Переход к заданиям этого урока
}
function showTasks() {
    document.getElementById("lesson-card").style.display = "none";
    document.getElementById("task-container").style.display = "block";
    currentTaskIndex = 0;
    loadTask();
}

function loadTask() {
    const task = tasks[currentTaskIndex];
    const taskDiv = document.getElementById("current-task");
    
    if (task.type === "findError") {
        correctAnswersCount = 0;
    }

    if (task.type === "multipleChoice") {
        taskDiv.innerHTML = `
            <h3>${task.question}</h3>
            ${task.options
                .map(
                    (option, index) => `
                <div>
                    <input type="radio" name="task${currentTaskIndex}" id="option${index}" value="${option.correct}">
                    <label for="option${index}">${option.text}</label>
                </div>`
                )
                .join("")}
            <button onclick="nextTask()">Iesniegt atbildi</button>
        `;
    } else if (task.type === "findError") {
        let html = `<h3>${task.title}</h3>`;
        task.questions.forEach((q, index) => {
            html += `<p>${q.text}</p>`;
            q.options.forEach(option => {
                html += `<button onclick="checkError('${option}', '${q.correct}', ${index})">${option}</button>`;
            });
        });
        taskDiv.innerHTML = html;
    } else if (task.type === "writeTranslation") {
        const question = task.questions[0];
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${question.text}</p>
            <input type="text" id="translationInput">
            <button onclick="checkTranslation('${question.answer}')">Iesniegt</button>
        `;
    } else if (task.type === "wordOrder") {
        const question = task.questions[0];
        let html = `<h3>${task.title}</h3>`;
        question.words.forEach(word => {
            html += `<button>${word}</button>`;
        });
    }
}

function nextTask() {
    const task = tasks[currentTaskIndex];
    
    if (task.type === "multipleChoice") {
        const selectedOption = document.querySelector(
            `input[name="task${currentTaskIndex}"]:checked`
        );
        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        const isCorrect = selectedOption.value === "true";
        if (isCorrect) {
            alert("Correct!");
        } else {
            alert("Incorrect. Try again!");
        }
    }
    
    if (task.type === "findError" && correctAnswersCount === task.questions.length) {
        alert("Correct! Moving to next task...");
    }

    currentTaskIndex++;

    if (currentTaskIndex < tasks.length) {
        loadTask(); // Загружаем следующее задание
    } else {
        // Если задания закончились
        alert("You've completed all tasks!");
        document.getElementById("task-container").style.display = "none";
        document.getElementById("level-selection").style.display = "block";
    }
}

function checkError(selectedOption, correctAnswer, index) {
    if (selectedOption === correctAnswer) {
        correctAnswersCount++;
        alert("Correct!");
        if (correctAnswersCount === 2) {
            nextTask();
        }
    } else {
        alert("Incorrect. Try again!");
    }
}
function checkTranslation(correctAnswer) {
    const userAnswer = document.getElementById("translationInput").value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!");
        nextTask();  // Переход к следующему заданию
    } else {
        alert("Incorrect. Try again!");  // Если ответ неправильный
    }
}

document.getElementById("level-selection").innerHTML += `
    <button onclick="startLesson('lesson4')" style="background-color: #936DBA; color: white; font-weight: bold; padding: 10px; border-radius: 5px; margin-top: 10px;">
        4. nodarbība: Nobeiguma apskats
    </button>
`;


