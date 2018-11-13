import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../state';
import { Act, ActionCreators as Acc, Operator } from '../actions';
import NumberButton from './NumberButton';

interface Props {
  leftValue: number;
  rightValue: number | null;
  isDisplayLeftValue: boolean;
  dispatch: (action: Act) => void;
}
class Dentaku extends React.Component<Props> {
  render(): JSX.Element {
    const { leftValue, rightValue, isDisplayLeftValue, dispatch } = this.props;
    const makeOnClickOperator = (operator: Operator) => (): void => {
      dispatch(Acc.operator(operator));
    };
    const onClickEquals = (): void => {
      dispatch(Acc.equals());
    };
    const onClickClear = (): void => {
      dispatch(Acc.clear());
    };

    return (
      <div>
        <h3>電卓</h3>
        <div>{isDisplayLeftValue ? leftValue : rightValue}</div>
        <div>
          {[1, 2, 3].map((d: number) => <NumberButton digit={d} key={d} />)}
          <button onClick={makeOnClickOperator(Operator.PLUS)}>{Operator.PLUS}</button>
        </div>
        <div>
          {[4, 5, 6].map((d: number) => <NumberButton digit={d} key={d} />)}
          <button onClick={makeOnClickOperator(Operator.MINUS)}>{Operator.MINUS}</button>
        </div>
        <div>
          {[7, 8, 9].map((d: number) => <NumberButton digit={d} key={d} />)}
          <button onClick={makeOnClickOperator(Operator.MULTYPLY)}>{Operator.MULTYPLY}</button>
        </div>
        <div>
          <NumberButton digit={0} key={0} />
          <button onClick={onClickClear}>C</button>
          <button onClick={onClickEquals}>=</button>
          <button onClick={makeOnClickOperator(Operator.DIVIDE)}>{Operator.DIVIDE}</button>
        </div>
      </div>
    );
  }
}
export default connect(
  (state: GlobalState) => ({
    leftValue: state.leftValue,
    rightValue: state.rightValue,
    isDisplayLeftValue: state.isDisplayLeftValue,
  }),
)(Dentaku);
