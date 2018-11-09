import { GlobalState, initialState } from './state';
import { Act, ActionTypes } from './actions';

export default function reducers(state: GlobalState = initialState, action: Act): GlobalState {
  switch (action.type) {
  case ActionTypes.HELLO:
    if (!state.message.startsWith('Hello')) {
      return {
        message: 'Hello!',
      };
    }
    return {
      message: `${state.message}!`,
    };
  case ActionTypes.GOODBYE:
    {
      const { name } = action.payload;
      return {
        message: `Goodbye ${name}!`,
      };
    }
  default:
    return state;
  }
}
