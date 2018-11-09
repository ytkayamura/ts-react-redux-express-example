import { Action } from 'redux';

// Action Types
export enum ActionTypes {
  HELLO = 'HELLO',
  HELLO_WORLD = 'HELLO_WORLD',
  GOODBYE = 'GOODBYE',
}

// Action Interfaces
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
export type Act = HelloAction | HelloWorldAction | GoodbyeAction;

// Action Creators
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
};
