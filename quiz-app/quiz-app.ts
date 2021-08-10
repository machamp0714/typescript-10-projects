// 仕様: https://10projects10hours.netlify.app/quiz-app/index.html

class Quiz {
  static questions = [
    'What is the most used programming language in 2019?',
    'Who is the President of US?',
    'What does HTML stand for?',
    'What year was JavaScript launched?',
  ];

  static answers = [
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
    this.setup();
  }

  setup() {
    const questionDOM = document.getElementById('question');
    if (questionDOM) questionDOM.innerText = Quiz.questions[this.page];

    document.querySelectorAll('label').forEach((label, index) => {
      label.innerText = Quiz.answers[this.page][index];
    });
  }
}

class App {
  public page;

  constructor() {
    this.page = 1;
    new Quiz(this.page - 1);
    this.setEvent();
  }

  setEvent() {
    const button = document.getElementById('submit') as HTMLElement;
    button.addEventListener('click', () => {
      this.submit();
    });
  }

  submit() {}

  validates() {}
}

new App();
