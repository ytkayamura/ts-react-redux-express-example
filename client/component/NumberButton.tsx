import * as React from 'react';
import { connect } from 'react-redux';
import { Act, ActionCreators as Acc } from '../actions';

interface Props {
  digit: number;
  dispatch: (action: Act) => void;
}
class NumberButton extends React.Component<Props> {
  onClick = (): void => {
    const { digit, dispatch } = this.props;
    dispatch(Acc.inputDigit(digit));
  }

  render(): JSX.Element {
    const { digit } = this.props;
    return (
      <button type="button" onClick={this.onClick}>{digit}</button>
    );
  }
}
export default connect()(NumberButton);
