import * as React from 'react';
import { connect } from 'react-redux';
import { default as axios, AxiosResponse }  from 'axios';
import { GlobalState } from './state';
import Dentaku from './component/Dentaku';
import { Act, ActionCreators as Acc } from './actions';
import * as ResIF from '../common/response-if';

interface Props {
  greeting: string;
  dispatch: (action: Act) => void;
}
interface State {
  text: string;
}
class Hello extends React.Component<Props, State> {
  state = { text: '' };

  hello = (): void => {
    const { dispatch } = this.props;
    dispatch(Acc.hello());
  }

  helloWorld = async (): Promise<void> => {
    const { greeting, dispatch } = this.props;
    try {
      const res: AxiosResponse<ResIF.HelloWorld> = await axios.post('/api/hello', { greeting });
      dispatch(Acc.helloWorld(res.data.hello));
    } catch (err) {
      console.log(err);
    }
  }

  goodbye = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { dispatch } = this.props;
    this.setState({ ...this.state, text: '' });
    dispatch(Acc.goodbye(this.state.text));
  }

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, text: e.target.value });
  }

  render(): JSX.Element {
    const { greeting } = this.props;

    return (
      <div>
        <button type="button" onClick={this.hello}>Hello!</button>
        <button type="button" onClick={this.helloWorld}>Hello World!</button><div/>
        <form onSubmit={this.goodbye}>
          <input value={this.state.text} onChange={this.handleTextChange} />
          <button type="submit">Goodbye!</button>
        </form>
        <div>{greeting}</div>
        <hr/>
        <Dentaku />
      </div>
    );
  }
}
export default connect(
  (state: GlobalState) => ({ greeting: state.message }),
)(Hello);
