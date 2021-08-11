// 仕様: https://10projects10hours.netlify.app/quiz-app/index.html

class Quiz {
  inputs = document.querySelectorAll<HTMLInputElement>('input');
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

  setup(page: number) {
    const question = document.getElementById('question');
    if (question) question.innerText = this.questions[page];

    this.inputs.forEach((input) => (input.checked = false));
    document.querySelectorAll<HTMLLabelElement>('label').forEach((label, index) => {
      label.innerText = this.choices[page][index];
    });
  }
}

class App {
  page = 0;
  result = 0;
  quiz = new Quiz();
  inputs = document.querySelectorAll<HTMLInputElement>('input');

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

    this.page++;
    this.quiz.setup(this.page);
  }

  isAnyRadioButtonsChecked() {
    return Array.from(this.inputs).some((input) => input.checked);
  }
}

new App();
