import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  greeting: string;
}
interface HelloState {
  greeting: string;
}
class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props);
    const { greeting } = this.props;
    this.state = {
      greeting,
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(): void {
    this.setState({
      ...this.state,
      greeting: `${this.state.greeting}!`,
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <button type="button" onClick={this.btnClick}>Hello!</button>
        <div>{this.state.greeting}</div>
      </div>
    );
  }
}

ReactDOM.render(<Hello greeting="Hello!" />, document.querySelector('#app'));
