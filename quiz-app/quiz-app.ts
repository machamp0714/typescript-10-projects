// 仕様: https://10projects10hours.netlify.app/quiz-app/index.html

type QuizData = {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: 'a' | 'b' | 'c' | 'd';
};

class Quiz {
  private currentQuiz = 0;
  private score = 0;
  private questionEl = document.getElementById('question') as HTMLElement;
  private answerEls = document.querySelectorAll<HTMLInputElement>('input');
  private a_text = document.getElementById('a_text') as HTMLElement;
  private b_text = document.getElementById('b_text') as HTMLElement;
  private c_text = document.getElementById('c_text') as HTMLElement;
  private d_text = document.getElementById('d_text') as HTMLElement;
  private submitButton = document.getElementById('submit') as HTMLElement;

  quizData: QuizData[] = [
    {
      question: 'What is the most used programming language in 2019?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'Who is the President of US?',
      a: 'Florin Pop',
      b: 'Donald Trump',
      c: 'Ivan Saldano',
      d: 'Mihai Andrei',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Cascading Style Sheet',
      c: 'Jason Object Notation',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ];

  get quizCount() {
    return this.quizData.length;
  }

  static start() {
    new Quiz().setup();
  }

  setup() {
    this.deselectAnswers();
    const currentQuizData = this.quizData[this.currentQuiz];

    this.questionEl.innerText = currentQuizData.question;
    this.a_text.innerText = currentQuizData.a;
    this.b_text.innerText = currentQuizData.b;
    this.c_text.innerText = currentQuizData.c;
    this.d_text.innerText = currentQuizData.d;

    this.submitButton.addEventListener('click', () => this.submit());
  }

  submit() {
    const answer = Array.from(this.answerEls).find((el) => el.checked);
    if (answer) {
      if (this.isCorrect(answer)) {
        this.score++;
      }

      this.currentQuiz++;
      if (this.currentQuiz < this.quizCount) {
        this.setup();
      } else {
        this.displayResult();
      }
    }
  }

  isCorrect(answer: HTMLInputElement) {
    return answer.id === this.quizData[this.currentQuiz].correct;
  }

  deselectAnswers() {
    this.answerEls.forEach((el) => (el.checked = false));
  }

  displayResult() {
    const body = document.querySelector<HTMLElement>('body') as HTMLElement;
    body.innerHTML = `
    <div class="quiz-container" id="quiz">
      <h2>You answered correctly at ${this.score}/${this.quizCount} questions.</h2>

      <button onclick="location.reload()">Reload</button>
    </div>
    `;
  }
}

Quiz.start();
