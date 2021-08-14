// 仕様: https://10projects10hours.netlify.app/quiz-app/index.html

class Quiz {
  inputs = document.querySelectorAll<HTMLInputElement>('input');
  labels = document.querySelectorAll<HTMLLabelElement>('label');
  questions = [
    'What is the most used programming language in 2019?',
    'Who is the President of US?',
    'What does HTML stand for?',
    'What year was JavaScript launched?',
  ];

  choices = [
    ['Java', 'C', 'Python', 'JavaScript'],
    ['Florin Pop', 'Donald Trump', 'Ivan Saldano', 'Mihai Andrei'],
    [
      'Hypertext Markup Language',
      'Cascading Style Sheet',
      'Jason Object Notation',
      'Helicopters Terminals Motorboats Lamborginis',
    ],
    ['1996', '1995', '1994', 'none of the above'],
  ];
  answers = ['Java', 'Donald Trump', 'Hypertext Markup Language', '1995'];

  get count() {
    return this.choices.length;
  }

  isCorrect(value: string, currentQuiz: number) {
    return this.answers[currentQuiz] === value;
  }

  setup(currentQuiz: number) {
    const question = document.getElementById('question');
    if (question) question.innerText = this.questions[currentQuiz];

    this.inputs.forEach((input, index) => {
      input.checked = false;
      input.value = this.choices[currentQuiz][index];
    });
    this.labels.forEach((label, index) => {
      label.innerText = this.choices[currentQuiz][index];
    });
  }
}

class App {
  currentQuiz = 0;
  score = 0;
  quiz = new Quiz();
  inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input'));

  constructor() {
    this.quiz.setup(this.currentQuiz);
    this.setEvent();
  }

  static start() {
    new App();
  }

  setEvent() {
    const button = document.getElementById('submit');
    if (button) {
      button.addEventListener('click', () => {
        this.submit();
      });
    }
  }

  submit() {
    if (!this.isAnyRadioButtonsChecked()) {
      return;
    }

    const checkedInput = this.inputs.find((input) => input.checked) as HTMLInputElement;
    if (this.quiz.isCorrect(checkedInput.value, this.currentQuiz)) {
      this.score++;
    }
    this.currentQuiz++;

    if (this.isFinished()) {
      this.displayResult();
    } else {
      this.quiz.setup(this.currentQuiz);
    }
  }

  displayResult() {
    const body = document.querySelector<HTMLElement>('body');
    if (body) {
      body.innerHTML = '';
      body.innerHTML = `
      <div class="quiz-container" id="quiz">
        <h2>You answered correctly at ${this.score}/${this.quiz.count} questions.</h2>

        <button onclick="location.reload()">Reload</button>
      </div>
      `;
    }
  }

  isAnyRadioButtonsChecked() {
    return this.inputs.some((input) => input.checked);
  }

  isFinished() {
    return this.currentQuiz === this.quiz.count;
  }
}

App.start();
