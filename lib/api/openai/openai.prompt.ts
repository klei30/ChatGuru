import { commands } from 'lib/constants/constant.command';
import { Promptable } from 'lib/api/openai/openai.types';
import { Trainer } from 'lib/api/openai/openai.trainer';

export class Prompt implements Promptable {
  private trainer: Trainer;

  constructor() {
    this.trainer = new Trainer();
  }

  private formatRequest(userRequest: string[]): string {
    const request: string = userRequest.slice(-1)[0];

    const userQuestion =
      request[0].toLocaleUpperCase() + request.slice(1).toLocaleLowerCase();

    return userQuestion;
  }

  private formatString(text: string[]) {
    let finalString = '';

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        finalString += `You: ${text[i]}`;
      } else {
        finalString += `ChatGuru: ${text[i]}`;
      }
    }

    return finalString;
  }

  public trainPrompt(command: string, request: string[]): string {
    let response = ``;

    switch (command) {
      case commands.BASIC_QUESTION:
        response +=
          `${this.trainer.generateQA()}` +
          `${this.formatString(request)}` +
          `You:` +
          `${this.formatRequest(request)}?` +
          `ChatGuru: `;
        break;
      case commands.GENERATE_CODE:
        response +=
          `${this.trainer.generateCode()}` +
          `${this.formatString(request)}` +
          `You:` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
      case commands.GENERATE_THESIS_TITLE:
        response +=
          `${this.trainer.generateThesisTitle()}` +
          `${this.formatString(request)}` +
          `You:` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
      case commands.GRAMMAR_CORRECTION:
        response +=
          `${this.trainer.correctGrammar()}` +
          `${this.formatString(request)}` +
          `You:` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
      case commands.PARAPHRASE:
        response +=
          `${this.trainer.paraphrase()}` +
          `${this.formatString(request)}` +
          `You:` +
          `"${this.formatRequest(request)}"` +
          `ChatGuru: `;
        break;
      case commands.SUMMARIZE_FOR_A_STUDENT_GRADE:
        response +=
          `${this.trainer.summarize()}` +
          `${this.formatString(request)}` +
          `You: : ` +
          `"${this.formatRequest(request)}"` +
          `ChatGuru: `;
        break;
      case commands.ENGLISH_TO_OTHER_LANGUAGE:
        response +=
          `${this.trainer.englishToOther()}` +
          `${this.formatString(request)}` +
          `You: ` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
      case commands.EXPLAIN_PROGRAMMING_CODE:
        response +=
          `${this.trainer.explainProgrammingCode()}` +
          `"${this.formatString(request)}"` +
          `You: ` +
          `"${this.formatRequest(request)}"` +
          `ChatGuru: `;
        break;
      case commands.EVALUATE_A_MATHEMATICAL_EXPRESSION:
        response +=
          `${this.trainer.evaluateMathematicalExpression()}` +
          `${this.formatString(request)}` +
          `You: ` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
      case commands.CREATE_STUDY_NOTES:
        response +=
          `${this.trainer.createStudyNotes()}` +
          `${this.formatString(request)}` +
          `You: ` +
          `${this.formatRequest(request)}` +
          `ChatGuru: `;
        break;
    }

    return response;
  }
}
