import React, { Component } from "react";
import db from "../firebase";
class FormLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      desc: this.props.desc
    };
    // console.log(this.state, this.props.id);
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    // console.log(state);
  };
  onSubmit = e => {
    e.preventDefault();
    const { item, desc } = this.state;
    if (this.props.id == null) {
      db.collection("todos").add({ item, desc });
      this.setState({
        item: " ",
        desc: " "
      });
    } else {
      db.collection("todos")
        .doc(this.props.id)
        .set({ item, desc });
    }
  };
  render() {
    // console.log(this.state, this.props.id);
    return (
      <div>
        <form onSubmit={this.onSubmit} className="container">
          {this.props.id == null ? (
            <div className="container center">
              <h4 className="green-text text-accent-4">Add Note</h4>
            </div>
          ) : null}
          <div className="input-field">
            <input
              type="text"
              name="item"
              id="item"
              value={this.state.item}
              onChange={this.onChange}
            />
            <label htmlFor="item" className="active">
              Note
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="desc"
              id="desc"
              value={this.state.desc}
              onChange={this.onChange}
            />
            <label htmlFor="desc" className="active">
              Description
            </label>
          </div>

          <div className="input-field center">
            <button className="btn-small btn-flat save-utton green-text">
              save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormLayout;
