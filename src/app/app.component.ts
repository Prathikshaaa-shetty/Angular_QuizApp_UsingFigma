import { Component } from '@angular/core';
import { ScoreModel } from './models/score.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quiz';
  public showRegister: boolean = true;
  public showQuiz: boolean = false;
  public showResult: boolean = false;
  public noOfCorrectAns: number = 0;
  public totalQuestions: number = 0;

  handleRegister(showRegister: boolean): void {
    this.showRegister = showRegister;
    if (!this.showRegister) {
      this.showQuiz = true;
    }
  }

  handleOnComplete(event: ScoreModel): void {
    debugger;
    this.noOfCorrectAns = event.noOfCorrectAns;
    this.totalQuestions = event.totalQuestions;
    this.showRegister = false;
    this.showQuiz = false;
    this.showResult = true;
  }
}
