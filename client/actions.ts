import { Action } from 'redux';

// Operator for Dentaku
export enum Operator {
  PLUS = '+',
  MINUS = '-',
  MULTYPLY = '*',
  DIVIDE = '/',
}

/*
 * Action Types
 */
export enum ActionTypes {
  HELLO = 'HELLO',
  HELLO_WORLD = 'HELLO_WORLD',
  GOODBYE = 'GOODBYE',
  // Dentaku
  INPUT_DIGIT = 'INPUT_DIGIT',
  OPERATOR = 'OPERATOR',
  EQUALS = 'EQUALS',
  CLEAR = 'CLEAR',
}

/*
 * Action Interfaces
 */
interface HelloAction extends Action {
  type: ActionTypes.HELLO;
}
interface HelloWorldAction extends Action {
  type: ActionTypes.HELLO_WORLD;
  payload: {
    greeting: string;
  };
}
interface GoodbyeAction extends Action {
  type: ActionTypes.GOODBYE;
  payload: {
    name: string;
  };
}
// Dentaku
interface InputDigitAction extends Action {
  type: ActionTypes.INPUT_DIGIT;
  payload: {
    digit: number;
  };
}
interface OperatorAction extends Action {
  type: ActionTypes.OPERATOR;
  payload: {
    operator: Operator;
  };
}
interface EqualsAction extends Action {
  type: ActionTypes.EQUALS;
}
interface ClearAction extends Action {
  type: ActionTypes.CLEAR;
}
export type Act = HelloAction | HelloWorldAction | GoodbyeAction |
  InputDigitAction | OperatorAction | EqualsAction | ClearAction;

/*
 * Action Creators
 */
export const ActionCreators = {
  hello: (): HelloAction => ({
    type: ActionTypes.HELLO,
  }),

  helloWorld: (greeting: string): HelloWorldAction => ({
    type: ActionTypes.HELLO_WORLD,
    payload: { greeting },
  }),

  goodbye: (name: string): GoodbyeAction => ({
    type: ActionTypes.GOODBYE,
    payload: { name },
  }),

  // Dentaku
  inputDigit: (digit: number): InputDigitAction => ({
    type: ActionTypes.INPUT_DIGIT,
    payload: { digit },
  }),

  operator: (operator: Operator): OperatorAction => ({
    type: ActionTypes.OPERATOR,
    payload: { operator },
  }),

  equals: (): EqualsAction => ({
    type: ActionTypes.EQUALS,
  }),

  clear: (): ClearAction => ({
    type: ActionTypes.CLEAR,
  }),
};
