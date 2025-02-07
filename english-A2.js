// Функция для открытия/закрытия описания урока
function toggleLesson(lessonNumber) {
    const lessonContent = document.getElementById(`lesson${lessonNumber}`);
    lessonContent.style.display = (lessonContent.style.display === "block") ? "none" : "block";
}

let tasks = [];
let currentTaskIndex = 0;
let correctAnswersCount = 0;
let totalQuestions = 0;

// Функция для начала урока
function startLesson(lesson) {
    document.querySelector(".lessons").style.display = "none";
    document.getElementById("lesson-card").style.display = "block";

    if (lesson === 'lesson1') {
        loadLesson1();
        startListening(); // для первого урока запускаем слушание
    } else if (lesson === 'lesson2') {
        loadLesson2();
        showTheory(); // для второго урока показываем теорию
    } else if (lesson === 'lesson3') {
        loadLesson3();
        showTheory(); 
    }
}


// Функция отображения теории с кнопкой для перехода к заданиям
function showTheory() {
    const lessonCard = document.getElementById("lesson-card");
    lessonCard.style.display = "block"; // Делаем карточку видимой
    document.getElementById("task-container").style.display = "none";

    document.getElementById("theory-content").innerHTML = `
        <h2>📩 Kā uzrakstīt draudzīgu e-pastu angļu valodā?</h2>
        <p><strong>Ko Tu apgūsi:</strong></p>
        <ul>
            <li>✅ Izlasīsi draudzīga e-pasta piemēru</li>
            <li>✅ Apgūsi svarīgas frāzes</li>
            <li>✅ Uzrakstīsi savu e-pastu un saņemsi atgriezenisko saiti</li>
        </ul>
        <h3>📢 Īss skaidrojums:</h3>
        <p>Draudzīgi e-pasti ir viegli! Galvenais:</p>
        <ul>
            <li>🔹 Draudzīgs un nepiespiests tonis</li>
            <li>🔹 Vienkāršas, dabiskas frāzes</li>
            <li>🔹 Skaidra struktūra: sveiciens, galvenais teksts, nobeigums</li>
    `;


}

// Функция загрузки первого урока
function loadLesson1() {
    document.getElementById("theory-content").innerHTML = `
        <h2>Lesson 1: Listening Exercise</h2>
        <p>Listen to the conversation and watch the text appear as you hear it.</p>
        <button onclick="startListening()">Start Listening</button>
        <div id="listening-text" style="margin-top: 20px; font-style: italic;"></div>
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "What does Emma want to do?",
            options: [
                { text: "Buy a bus ticket", correct: false },
                { text: "Go to the museum", correct: true },
                { text: "Visit a café", correct: false }
            ]
        },
        {
            type: "writeTranslation",
            title: "Aizpildiet tukšo lauku:",
            questions: [
                { text: "The ______ is located on Main Street.", answer: "museum" },
            ],
        },
        {
            type: "multipleChoice",
            question: "Who is waiting with Emma at the bus stop?",
            options: [
                { text: "Jack", correct: false },
                { text: "No one", correct: false },
                { text: "Jane", correct: true },
                { text: "The bus driver", correct: false },
            ]
        },
        {
            type: "multipleChoice",
            question: "Emma wants to visit the art gallery.",
            options: [
                { text: "true", correct: false },
                { text: "false", correct: true }
            ]
        },
        {
            type: "writeTranslation",
            title: "Atbildiet uz jautājumu:",
            questions: [
                { text: "Write the name of the street where the museum is located.", answer: "Main Street" },
            ],
        },
        {
            type: "multipleChoice",
            question: "How does Jane suggest Emma get to the museum?",
            options: [
                { text: "Take a taxi", correct: false },
                { text: "Take the bus", correct: true },
                { text: "Walk", correct: false },
                { text: "Ride a bike", correct: false },
            ]
        },
        {
            type: "writeTranslation",
            title: "Atbildiet uz jautājumu:",
            questions: [
                { text: "How much does the bus ticket cost? Write only the number.", answer: "2" },
            ],
        },
    ];
}

function loadLesson2() {
    document.getElementById("theory-content").innerHTML = `
    `;
    tasks = [
        {
            type: "multipleChoice",
            question: "💡 Cik bieži Tu raksti e-pastus draugiem?",
            options: [
                { text: "Bieži", correct: true },
                { text: "Reti", correct: true },
                { text: "Nekad", correct: true }
            ]
        },
        {
            type: "multipleChoice",
            question: "<h2> E-pasta struktūra</h2> <br> <h3>📌 Kāda ir pareizā e-pasta struktūra?</h3><br>Ikvienam e-pastam ir nepieciešama skaidra struktūra, lai tas būtu saprotams un labi uztverams. E-pasta struktūra ir šāda:<br><strong>Sveiciens</strong> – sākumā jābūt draudzīgam sveicienam. Tas parāda, ka esi ieinteresēts otrā cilvēkā. <br>✔ Hey [vārds]! <br>✔ Hi [vārds], how are you? <br>✔ Dear [vārds], <br> <strong>Galvenā daļa –</strong>šeit jāpastāsta, kā tev klājas, ko jaunu esi piedzīvojis vai uzdot jautājumus otrai personai. <br>✔ I hope you’re doing well. <br>✔ How was your weekend? <br>✔ I wanted to share something exciting with you... <br> <strong>Nobeigums –</strong>  beidzot e-pastu, tev jāizsaka vēlmi tikties, sazināties vai vienkārši novēlēt labas lietas.<br>✔ Let’s catch up soon! <br> ✔ Take care, <br> ✔ Talk to you soon, <br> <strong> Paraksts –</strong>beigās paraksti savu vārdu. <br>✔ Best wishes, <br> ✔ Cheers, <br> ✔ All the best, ",
            options: [
                {text: "tālāk", correct: true}
            ]
        },
        {
            type: "multipleChoice",
            question: "<h2> 👀 Izlasi e-pastu no Aleksa Tomam:</h2> <br> Hey Tom, how’s it going? <br> I just wanted to say hi and see how you’re doing. Last weekend, I went hiking with Sarah—it was amazing! Have you been on any trips lately? <br> Let’s catch up soon! <br>Take care, <br>Alex<br>",
            options: [
                {text: "tālāk", correct: true}
            ]
        },
        {
            type: "multipleChoice",
            question: "🔎 Kādi 3 svarīgi elementi ir e-pastā?",
            options: [
                { text: "Sveiciens, galvenais teksts, nobeigums", correct: true },
                { text: "Ievads, secinājums, paraksts", correct: false },
                { text: "Tikai galvenais teksts", correct: false }
            ]
        },
        {
            type: "multipleChoice",
            question: "<h3>Pabeidz šos teikumus, izmantojot piemērotās frāzes no apgūtajiem piemēriem.<h3> <br>I just wanted to say ______",
            options: [
                { text: "hi!", correct: true },
                { text: "take care!", correct: false },
                { text: "you’re doing well!", correct: false }
            ],
        },
        {
        type: "multipleChoice",
        question: "<h3>Pabeidz šos teikumus, izmantojot piemērotās frāzes no apgūtajiem piemēriem.<h3> <br>How was your ______?",
        options: [
            { text: "cat", correct: false },
            { text: "weekend", correct: true },
            { text: "food", correct: false }
        ],
        },
        {
        type: "multipleChoice",
        question: "<h3>Pabeidz šos teikumus, izmantojot piemērotās frāzes no apgūtajiem piemēriem.<h3> <br>Let’s catch up ______!",
        options: [
            { text: "right now", correct: false },
            { text: "soon", correct: true },
        ]
        },
        {
            type: "writeTranslation",
            title: "<h3>📝 Aizpildi e-pastu ar trūkstošajām frāzēm:</h3> <br> Hi [vārds],",
            questions:[
                { text: "____? Hope you’re doing well.", answer: "How are you" },
                {text: "Just wanted to say hi! Have you been up to anything fun? <br> ___, [tavs vārds]", answer: "Bye"}
            ],
        },
        {
            type: "multipleChoice",
            question: "<h2>🎉 Tu esi gatavs! Tagad Tu vari:</h2> <br>✅ Rakstīt draudzīgus e-pastus, izmantojot pareizu struktūru<br>✅ Izmantot svarīgas frāzes<br>✅ Pārliecināti sazināties ar draugiem angļu valodā<br><strong>👀 Mini-izaicinājums:</strong><br>Pamēģini uzrakstīt īstu e-pastu draugam, izmantojot šodien apgūtās frāzes un struktūru!",
            options: [
                {text: "🚀 Turpināt", correct: true}
            ]
        },
    ];
    showTasks();
}
function showTasks() {
    document.getElementById("task-container").style.display = "block";
    document.getElementById("lesson-card").style.display = "none";
    currentTaskIndex = 0;
    correctAnswersCount = 0;
    totalQuestions = tasks.length;
    loadTask();
}

function loadTask() {
    if (currentTaskIndex >= tasks.length) {
        showResults();
        return;
    }

    const task = tasks[currentTaskIndex];
    const taskDiv = document.getElementById("current-task");
    taskDiv.innerHTML = `<h3>${task.question || task.title }</h3>`;

    if (task.type === "multipleChoice") {
        task.options.forEach((option, index) => {
            taskDiv.innerHTML += `
                <div>
                    <input type="radio" name="task" id="option${index}" value="${option.correct}">
                    <label for="option${index}">${option.text}</label>
                </div>`;
        });
        taskDiv.innerHTML += `<button onclick="checkAnswer()">Iesniegt</button>`;
    } else if (task.type === "writeTranslation") {
        let html = `<h3>${task.title}</h3>`;
        
        task.questions.forEach((question, index) => {
            html += `
                <p>${question.text}</p>
                <input type="text" id="translationInput${index}">
            `;
        });
    
        html += `<button onclick="checkTranslation()">Iesniegt</button>`;
        
        taskDiv.innerHTML = html;
    }      
}


function nextTask() {
    const task = tasks[currentTaskIndex];

    totalQuestions++;
    
    if (isCorrect) {
        correctAnswersCount++;
        totalQuestions++;
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }    

    currentTaskIndex++;

    if (currentTaskIndex < tasks.length) {
        loadTask(); 
    } else {
        showResults(); // Показываем результаты сразу после выполнения всех заданий
    }    
}

function startListening() {
    const audio = new Audio('/audio.mp3');
    audio.play();
    let textDisplay = document.getElementById("listening-text");
    textDisplay.innerHTML = "";

    const dialogue = [
        { time: 0, text: "Emma: Excuse me, can you help me? I want to go to the museum." },
        { time: 4, text: "Jane: Yes, of course. The museum is on Main Street." },
        { time: 7, text: "Emma: Thank you. How do I get there?" },
        { time: 10.5, text: "Jack: You can take the bus. Walk straight for two blocks, then turn right. The bus stop is near the café." },
        { time: 17, text: "Emma: Great, thank you. And how much is the bus ticket?" },
        { time: 21, text: "Jane: It is $2. You can buy it from the ticket machine at the stop." },
        { time: 24.5, text: "Emma: I see. What time does the bus arrive?" },
        { time: 28, text: "Jane: The bus comes every 10 minutes. I will wait with you." },
        { time: 32, text: "Emma: By the way, what are your plans for today?" },
        { time: 35, text: "Jane: I plan to visit the art gallery after the museum. Do you want to join me?" },
        { time: 40, text: "Emma: It sounds like a good day! Let’s go to the bus stop together." },
    ];

    dialogue.forEach((line) => {
        setTimeout(() => {
            textDisplay.innerHTML += `<p>${line.text}</p>`;
        }, line.time * 1000);
    });
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
function checkAnswer() {
    const selectedOption = document.querySelector("input[name='task']:checked");
    if (!selectedOption) {
        alert("Lūdzu, izvēlieties atbildi!");
        return;
    }

    if (selectedOption.value === "true") {
        correctAnswersCount++;
        alert("Pareizi!");
    } else {
        alert("Nepareizi. Mēģini vēlreiz!");
    }
    
    currentTaskIndex++;
    loadTask();
}
function checkTranslation() {
    let allCorrect = true;

    tasks[currentTaskIndex].questions.forEach((question, index) => {
        const userAnswer = document.getElementById(`translationInput${index}`).value.trim();
        if (userAnswer.toLowerCase() !== question.answer.toLowerCase()) {
            allCorrect = false;
        }
    });
    currentTaskIndex++;
    loadTask();

    if (allCorrect) {
        alert("Correct!");
        nextTask();
    } else {
        alert("Incorrect!");
    }
}

function showResults() {
    document.getElementById("task-container").style.display = "none";
    const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<h2>Labi darīts!</h2>
        <p>Jūs ieguvāt <strong>${scorePercentage}%</strong> pareizo atbilžu.</p>
        <button onclick="restartLesson()">Atgriezties uz sākumu</button>`;
    resultContainer.style.display = "block";
}

function restartLesson() {
    correctAnswersCount = 0;
    currentTaskIndex = 0;
    document.getElementById("task-container").style.display = "none";
    document.getElementById("result-container").style.display = "none";
    document.querySelector(".lessons").style.display = "block";
}


function openReading() {
    window.location.href = "../html/ea2/r.html"; 
}
function openReadAloud() {
    window.location.href = "../html/ea2/ra.html"; 
}
function openMenu() {
    window.location.href = "../html/english-A2.html"; 
}
function openChatAI() {
    window.location.href = "../html/ea2/ca.html"; 
}
function openSubscription() {
    window.location.href = "../html/ea2/sub.html";
}
function toggleBottomPanel(visible) {
    const panel = document.getElementById("bottom-panel");
    if (visible) {
        panel.classList.remove("hidden");
    } else {
        panel.classList.add("hidden");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    toggleBottomPanel(true); 
});
