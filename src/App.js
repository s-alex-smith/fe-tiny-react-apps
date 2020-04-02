import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import ItemAdder from "./Components/ItemAdder";

class App extends React.Component {
  state = {
    items: [
      { activity: "shopping", dueDate: "08/04" },
      { activity: "cleaning", dueDate: "05/04" },
      { activity: "cooking", dueDate: "02/04" }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ItemAdder addNewItem={this.addNewItem} />
        <ItemList items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }

  addNewItem = newItemActivity => {
    this.setState(currentState => {
      return { items: [...currentState.items, { activity: newItemActivity }] };
    });
  };

  deleteItem = completedItem => {
    const newItemList = this.state.items.filter(
      item => item.activity !== completedItem
    );
    this.setState({ items: newItemList });
  };
}

export default App;
