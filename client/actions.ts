import { Action } from 'redux';

// Action Types
export enum ActionTypes {
  HELLO = 'HELLO',
  GOODBYE = 'GOODBYE',
}

// Action Interfaces
interface HelloAction extends Action {
  type: ActionTypes.HELLO;
}
interface GoodbyeAction extends Action {
  type: ActionTypes.GOODBYE;
  payload: {
    name: string;
  };
}
export type Act= HelloAction | GoodbyeAction;

// Action Creators
export const ActionCreators = {
  hello: (): HelloAction => ({
    type: ActionTypes.HELLO,
  }),

  goodbye: (name: string): GoodbyeAction => ({
    type: ActionTypes.GOODBYE,
    payload: { name },
  }),
};
