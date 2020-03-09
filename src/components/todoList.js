import React from "react";
import Todo from "./todo";
import db from "../firebase";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      items: []
    };
  }
  onCollectionUpdate = querySnapshot => {
    const items = [];
    querySnapshot.forEach(doc => {
      const { item, desc } = doc.data();
      items.push({
        key: doc.id,
        doc, // DocumentSnapshot
        item,
        desc
      });
    });
    this.setState({
      items
    });
  };
  componentDidMount() {
    this.unsubscribe = db
      .collection("todos")
      .onSnapshot(this.onCollectionUpdate);
  }
  render() {
    // const { items } = this.state;
    // console.log(this.state.items);
    return (
      <div className="container todos">
        {this.state.items.map(i => (
          <Todo todo={i} key={i.key} />
        ))}
      </div>
    );
  }
}
export default TodoList;
