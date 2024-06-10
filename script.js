// script.js
document.getElementById('start-timer').addEventListener('click', startQuest);

function startQuest() {
    const tasks = document.querySelectorAll('input[type="checkbox"]');
    let timer = 24 * 60 * 60;
    const timerDisplay = document.getElementById('timer');
    const resultDisplay = document.getElementById('result');
    const startButton = document.getElementById('start-timer');
    
    startButton.disabled = true;
    timerDisplay.textContent = `Time remaining: ${formatTime(timer)}`;
    
    const countdown = setInterval(() => {
        timer--;
        timerDisplay.textContent = `Time remaining: ${formatTime(timer)}`;
        
        if (timer <= 0) {
            clearInterval(countdown);
            evaluateQuest(tasks);
            startButton.disabled = false;
        }
    }, 1000);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
}

function evaluateQuest(tasks) {
    let allCompleted = true;
    tasks.forEach(task => {
        if (!task.checked) {
            allCompleted = false;
        }
    });
    
    if (allCompleted) {
        document.getElementById('result').textContent = "Congratulations! You have earned your reward.";
    } else {
        document.getElementById('result').textContent = "You have failed the quest. Prepare for punishment.";
    }
}
