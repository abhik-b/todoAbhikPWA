import React from "react";
import db from "../firebase";
import FormLayout from "../containers/formlayout";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibile: false
    };
  }

  delete(id) {
    // console.log(id);
    db.collection("todos")
      .doc(id)
      .delete();
  }
  // componentDidMount() {
  //   var elems = document.querySelectorAll(".modal");
  //   M.Modal.init(elems, {});
  // }
  showModal = () => {
    this.setState({
      modalVisibile: !this.state.modalVisibile
    });
  };
  render() {
    // console.log(this.state.modalVisibile);
    return (
      <React.Fragment>
        <div className="card-panel todo yellow row" id="todo">
          {this.state.modalVisibile ? (
            <div id="" className="">
              <i className="material-icons" onClick={this.showModal}>
                close
              </i>
              <FormLayout
                id={this.props.todo.key}
                item={this.props.todo.item}
                desc={this.props.todo.desc}
              />
            </div>
          ) : null}
          <div className="todo-details">
            <div className="todo-item">{this.props.todo.item}</div>
            <div className="todo-desc">{this.props.todo.desc}</div>
          </div>
          <div className="todo-edit">
            {this.state.modalVisibile ? null : (
              <i className="material-icons " onClick={this.showModal}>
                edit
              </i>
            )}

            <i
              className="material-icons"
              onClick={this.delete.bind(this, this.props.todo.key)}
            >
              delete_outline
            </i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Todo;
