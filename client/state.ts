import { Operator } from './actions';

export interface GlobalState {
  message: string;
  // Dentaku
  leftValue: number;
  rightValue: number | null;
  isDisplayLeftValue: boolean;
  memoryOfOperator: Operator | null;
}

export const initialState: GlobalState = {
  message: 'Hello!',
  // Dentaku
  leftValue: 0,
  rightValue: null,
  isDisplayLeftValue: true,
  memoryOfOperator: null,
};
