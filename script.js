const pomodoroTime = document.querySelector('#pomodoro-time');

let timeLeft = 1500;
let mode = pomodoroTime;
let timerId;

function createStringTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const message = `${addingZero(minutes)}:${addingZero(seconds)}`;

    pomodoroTime.textContent = message;
};

function addingZero(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
};

const btnStart = document.querySelector('#start');

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        createStringTime();

        if (timeLeft === 0) {
            clearInterval(timerId);

            if (mode === btnBreak) {
                timeLeft = 300;
            } else if (mode === pomodoroTime) {
                timeLeft = 1500;
            }

            createStringTime();
            btnStart.textContent = 'start';
        }
    }, 1);
};

function resetTimer() {
    clearInterval(timerId);

    if (mode === btnBreak) {
        timeLeft = 300;
    } else if (mode === pomodoroTime) {
        timeLeft = 1500;
    }

    createStringTime();
    btnStart.textContent = 'start';
};

const pomodoroOptionsBtn = document.querySelector('.pomodoro-options');

function classСhange(btn) {
    pomodoroOptionsBtn.querySelector('.active').classList.remove('active');
    btn.classList.add('active');

    return btn;
};

const pomodoroBtn = document.querySelector('#pomodoro');

pomodoroBtn.addEventListener('click', () => {
    timeLeft = 1500;
    mode = pomodoroTime;
    createStringTime();
    classСhange(pomodoroBtn);
});

const btnBreak = document.querySelector('#break');

btnBreak.addEventListener('click', () => {
    timeLeft = 300;
    mode = btnBreak;
    createStringTime();
    classСhange(btnBreak);
});

btnStart.addEventListener('click', () => {
    if (btnStart.textContent === 'stop') {
        clearInterval(timerId);
        btnStart.textContent = 'start';
    } else {
        btnStart.textContent = 'stop';
        startTimer();
    }
});

const btnReset = document.querySelector('#reset');

btnReset.addEventListener('click', resetTimer);