
async function loadBatch() {
    const response = await fetch('/next_batch');
    const questions = await response.json();
    const container = document.getElementById('quiz-container');
    container.innerHTML = "";
    questions.forEach((q, i) => {
        container.innerHTML += `<p>${i+1}. ${q.question}</p>
        ${q.options.map((opt, idx) => 
            `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
        ).join('')}`;
    });
}