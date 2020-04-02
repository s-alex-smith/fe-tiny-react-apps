import React from "react";

class ItemAdder extends React.Component {
  state = {
    userInput: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add to do item:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.userInput}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState({ userInput: input });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    this.props.addNewItem(this.state.userInput);
    this.setState({ userInput: "" });
  };
}

export default ItemAdder;
