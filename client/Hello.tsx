import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from './state';
import { Act, ActionCreators as Acc } from './actions';

interface Props {
  greeting: string;
  dispatch: (action: Act) => void;
}
interface State {
  text: string;
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
    this.hello = this.hello.bind(this);
    this.goodbye = this.goodbye.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  hello(): void {
    const { dispatch } = this.props;
    dispatch(Acc.hello());
  }

  goodbye(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const { dispatch } = this.props;
    this.setState({ ...this.state, text: '' });
    dispatch(Acc.goodbye(this.state.text));
  }

  handleTextChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ ...this.state, text: e.target.value });
  }

  render(): JSX.Element {
    const { greeting } = this.props;

    return (
      <div>
        <button type="button" onClick={this.hello}>Hello!</button><div/>
        <form onSubmit={this.goodbye}>
          <input value={this.state.text} onChange={this.handleTextChange} />
          <button type="submit">Goodbye!</button>
        </form>
        <div>{greeting}</div>
      </div>
    );
  }
}
export default connect(
  (state: GlobalState) => ({ greeting: state.message }),
)(Hello);
