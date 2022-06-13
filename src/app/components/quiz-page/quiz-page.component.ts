import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuizModel } from './models/quiz.model';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
  public quizData: QuizModel[] = [
    {
      question: 'Javascript is an _______ language?',
      a: 'Object based',
      b: 'Object basic',
      c: 'procedural',
      d: 'Object Oriented',
      correct: 'd',
    },
    {
      question:
        'Which of the following keywords is used to define a variable in Javascript?',
      a: 'var',
      b: 'let',
      c: 'Both a & b',
      d: 'None of the above',
      correct: 'c',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      a: 'const',
      b: 'var',
      c: 'let',
      d: 'constant',
      correct: 'a',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Cascading style sheet',
      b: 'Colorful style sheet',
      c: 'Computer style sheet',
      d: 'none of the above',
      correct: 'a',
    },
  ];
  public selectedQuiz: QuizModel;
  public selectedQuizIndex: number;
  public displayMessage: string = '';
  public showSubmitButton: boolean = true;
  public showNextButton: boolean = false;
  public noOfCorrectAns: number = 0;
  public correctAns: boolean = false;

  constructor() {
    this.selectedQuiz = this.quizData[0];
    this.selectedQuizIndex = 0;
    this.showNextButton = false;
    this.showSubmitButton = true;
  }

  ngOnInit() {}

  onSelectAns(answer: string) {
    this.showSubmitButton = true;
    this.showNextButton = false;

    if (!answer) {
      this.showNextButton = false;
      return;
    }

    this.correctAns = answer == this.selectedQuiz.correct;
    if (this.correctAns) {
      this.displayMessage = 'Submit! Go to next question';
    } else {
      this.displayMessage = 'Submit! Go to next question';
    }
  }

  onSubmit() {
    this.showNextButton = true;
    this.showSubmitButton = false;
    this.noOfCorrectAns = this.correctAns
      ? this.noOfCorrectAns + 1
      : this.noOfCorrectAns;
  }

  onNext() {
    this.showNextButton = false;
    this.showSubmitButton = true;
    if (this.selectedQuizIndex < this.quizData.length) {
      this.selectedQuizIndex = this.selectedQuizIndex + 1;
      this.selectedQuiz = this.quizData[this.selectedQuizIndex];
      this.displayMessage = '';
    } else {
      this.onComplete.emit({
        noOfCorrectAns: this.noOfCorrectAns,
        totalQuestions: this.quizData.length + 1,
      });
    }
  }

}
