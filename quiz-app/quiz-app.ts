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

  isCorrect(value: string, page: number) {
    return this.answers[page] === value;
  }

  setup(page: number) {
    const question = document.getElementById('question');
    if (question) question.innerText = this.questions[page];

    this.inputs.forEach((input, index) => {
      input.checked = false;
      input.value = this.choices[page][index];
    });
    this.labels.forEach((label, index) => {
      label.innerText = this.choices[page][index];
    });
  }
}

class App {
  page = 0;
  result = 0;
  quiz = new Quiz();
  inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input'));

  constructor() {
    this.quiz.setup(this.page);
    this.setEvent();
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
    if (this.quiz.isCorrect(checkedInput.value, this.page)) {
      this.result++;
    }
    this.page++;
    this.quiz.setup(this.page);
  }

  isAnyRadioButtonsChecked() {
    return this.inputs.some((input) => input.checked);
  }
}

new App();
