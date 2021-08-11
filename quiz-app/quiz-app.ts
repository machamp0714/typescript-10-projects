// 仕様: https://10projects10hours.netlify.app/quiz-app/index.html

class Quiz {
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

  constructor(public page: number) {
    this.page = page;
  }

  setup() {
    const question = document.getElementById('question');
    if (question) question.innerText = this.questions[this.page];

    document.querySelectorAll<HTMLLabelElement>('label').forEach((label, index) => {
      label.innerText = this.choices[this.page][index];
    });
  }
}

class App {
  page = 0;
  result = 0;
  quiz = new Quiz(this.page);
  inputs = document.querySelectorAll<HTMLInputElement>('input');

  constructor() {
    this.quiz.setup();
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

    console.log('submit');
  }

  isAnyRadioButtonsChecked() {
    return Array.from(this.inputs).some((input) => input.checked);
  }
}

new App();
