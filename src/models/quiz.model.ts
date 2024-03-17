import { Question } from './question.model';

export interface Quiz {
  id: number;
  name: string;
  theme?: string;
  questions: Question[];
  creationDate?: Date;
}
