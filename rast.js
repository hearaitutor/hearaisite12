const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Speech Recognition API not supported in this browser.");
}

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.continuous = true;

let selectedText = "";
let recordedText = "";
let startTime, endTime;

const texts = {
    1: "I wake up at 7 o'clock every morning. First, I brush my teeth and wash my face. Then, I have breakfast with my family. We usually eat bread, eggs, and drink tea. After breakfast, I get dressed and go to school. My school is near my house, so I walk there. Classes start at 8:30 AM. We have five lessons every day. My favorite subject is English because I like learning new languages. At 1 PM, school ends, and I return home. In the afternoon, I do my homework and help my mother with house chores. Sometimes, I play football with my friends in the park. In the evening, my family and I have dinner together. We talk about our day and enjoy the meal. After dinner, I watch TV or read a book. At 9 PM, I take a shower and prepare for bed. I usually sleep at 10 o'clock. This is my daily routine from Monday to Friday.",
    2: "Last Saturday, my family and I went to the zoo. We arrived at 10 o'clock in the morning. The weather was sunny and warm, perfect for a day out. First, we visited the monkey house. The monkeys were very active and funny. They jumped from tree to tree and played with each other. Next, we saw the big cats: lions, tigers, and leopards. The lions were sleeping under a tree, and the tigers were walking around their enclosure. We also enjoyed watching the elephants. They are such large and gentle animals. One elephant was spraying water with its trunk, and we all laughed. At noon, we had lunch at the zoo café. I ate a sandwich and drank some juice. After lunch, we visited the bird section. There were parrots, peacocks, and many other colorful birds. The parrots could talk, and they said, 'Hello' to us. In the afternoon, we watched a dolphin show. The dolphins did amazing tricks, and everyone clapped. We left the zoo at 5 PM, feeling happy and tired. It was a wonderful day, and I hope to visit the zoo again soon.",
    3: "My best friend's name is Anna. We have known each other since we were five years old. Now, we are both 12 years old and in the same class at school. Anna is tall and has long brown hair and green eyes. She is very kind and always helps others. We like to spend our free time together. On weekends, we often go to the park to play basketball. Sometimes, we ride our bikes around the neighborhood. Anna is good at painting, and she teaches me how to draw better. I enjoy listening to music, and we often share our favorite songs. At school, we sit next to each other. We help each other with homework and study for tests together. During lunch breaks, we talk about our plans and dreams. Anna wants to be a doctor when she grows up, and I want to be a teacher. We promise to support each other in achieving our goals. I am very grateful to have Anna as my best friend. She makes me laugh when I am sad and encourages me to do my best. I hope our friendship lasts forever."
};

document.querySelector(".text-options").addEventListener("click", (e) => {
    const card = e.target.closest(".text-card");
    if (!card) return;

    const textId = card.dataset.textId;
    selectedText = texts[textId];
    document.getElementById("text-content").innerText = selectedText;

    document.querySelector(".text-options").style.display = "none";
    document.getElementById("reading-screen").style.display = "flex";
});

document.getElementById("microphone-button").addEventListener("click", () => {
    if (recognition.isListening) {
        stopListening();
    } else {
        startListening();
    }
});

function startListening() {
    recordedText = "";
    startTime = new Date();
    recognition.start();
    recognition.isListening = true;
    document.getElementById("microphone-button").innerText = "🛑 Stop Reading";
}

function stopListening() {
    recognition.stop();
    endTime = new Date();
    recognition.isListening = false;
    document.getElementById("microphone-button").innerText = "🎤 Start Reading";
    showAnalysis();
}

recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            recordedText += event.results[i][0].transcript + " ";
        }
    }
};

function levenshtein(a, b) {
    const matrix = Array(a.length + 1).fill(null).map(() =>
        Array(b.length + 1).fill(null)
    );

    for (let i = 0; i <= a.length; i++) {
        matrix[i][0] = i;
    }
    for (let j = 0; j <= b.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, // deletion
                matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j - 1] + indicator // substitution
            );
        }
    }

    return matrix[a.length][b.length];
}

function analyzePronunciation(spokenText, referenceText) {
    // Нормализация текста: удаляем пунктуацию, приводим к нижнему регистру
    const normalize = (text) =>
        text
            .toLowerCase()
            .replace(/[^a-z0-9\s]/gi, "") // Удаление пунктуации
            .split(/\s+/) // Разбивка на слова
            .filter(Boolean); // Убираем пустые элементы

    const spokenWords = normalize(spokenText);
    const referenceWords = normalize(referenceText);

    let incorrectWords = [];
    let correctCount = 0;

    referenceWords.forEach((refWord, index) => {
        const spokenWord = spokenWords[index] || "";

        // Используем алгоритм Levenshtein для проверки схожести слов
        const distance = levenshtein(spokenWord, refWord);
        const similarity = 1 - distance / Math.max(refWord.length, spokenWord.length);

        if (similarity >= 0.85) {
            correctCount++;
        } else {
            incorrectWords.push(refWord);
        }
    });

    // Учитываем лишние слова в произнесённом тексте
    if (spokenWords.length > referenceWords.length) {
        incorrectWords.push(...spokenWords.slice(referenceWords.length));
    }

    const accuracy = ((correctCount / referenceWords.length) * 100).toFixed(2);

    return { accuracy, incorrectWords };
}

// Алгоритм Левенштейна для расчёта расстояния между словами
function levenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () =>
        Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
            if (i === 0) matrix[i][j] = j;
            else if (j === 0) matrix[i][j] = i;
            else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[a.length][b.length];
}


function showAnalysis() {
    const { accuracy, incorrectWords } = analyzePronunciation(recordedText, selectedText);
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    document.getElementById("reading-screen").style.display = "none";
    const results = document.getElementById("analysis-results");
    results.innerHTML = `
        <h2>Analysis Results</h2>
        <p><strong>Accuracy:</strong> ${accuracy}%</p>
        <p><strong>Duration:</strong> ${duration}s</p>
        <p><strong>Incorrect Words:</strong> ${incorrectWords.join(", ") || "None"}</p>
    `;
    document.getElementById("analysis-screen").style.display = "flex";
}


function openReading() {
    window.location.href = "../ea2/r.html"; 
}
function openReadAloud() {
    window.location.href = "../ea2/ra.html"; 
}
function openMenu() {
    window.location.href = "../english-A2.html"; 
}
function openChatAI() {
    window.location.href = "../ea2/ca.html"; 
}
function openSubscription() {
    window.location.href = "../ea2/sub.html";
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