class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    
    // set state
    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        
        <button onClick={this.toggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>

        {this.state.visibility && (
        <div>
          <p>Hey, these are the details you can see.</p>
        </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));