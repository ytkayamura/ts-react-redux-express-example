import { GlobalState, initialState } from './state';
import { Act, ActionTypes, Operator } from './actions';

function culculate(state: GlobalState): number {
  const rightValue: number = state.rightValue ? state.rightValue : 0;
  switch (state.memoryOfOperator) {
  case Operator.PLUS:
    return state.leftValue + rightValue;
  case Operator.MINUS:
    return state.leftValue - rightValue;
  case Operator.MULTYPLY:
    return state.leftValue * rightValue;
  case Operator.DIVIDE:
    return state.leftValue / rightValue;
  default:
    return rightValue;
  }
}
export default function reducers(state: GlobalState = initialState, action: Act): GlobalState {
  switch (action.type) {
  case ActionTypes.HELLO:
    if (!state.message.startsWith('Hello')) {
      return {
        ...state,
        message: 'Hello!',
      };
    }
    return {
      ...state,
      message: `${state.message}!`,
    };
  case ActionTypes.HELLO_WORLD:
    {
      const { greeting } = action.payload;
      return {
        ...state,
        message: greeting,
      };
    }
  case ActionTypes.GOODBYE:
    {
      const { name } = action.payload;
      return {
        ...state,
        message: `Goodbye ${name}!`,
      };
    }
  case ActionTypes.INPUT_DIGIT:
    {
      const { digit } = action.payload;
      const rightValue: number = state.rightValue ? state.rightValue * 10 + digit : digit;
      return {
        ...state,
        rightValue,
        isDisplayLeftValue: false,
      };
    }
  case ActionTypes.OPERATOR:
    {
      const { operator } = action.payload;
      const leftValue: number = culculate(state);
      return {
        ...state,
        leftValue,
        rightValue: null,
        memoryOfOperator: operator,
        isDisplayLeftValue: true,
      };
    }
  case ActionTypes.EQUALS:
    {
      const leftValue: number = state.memoryOfOperator ? culculate(state) : state.leftValue;
      return {
        ...state,
        leftValue,
        rightValue: leftValue,
        memoryOfOperator: null,
        isDisplayLeftValue: true,
      };
    }
  case ActionTypes.CLEAR:
    return {
      ...state,
      leftValue: 0,
      rightValue: null,
      memoryOfOperator: null,
      isDisplayLeftValue: true,
    };
  default:
    return state;
  }
}
