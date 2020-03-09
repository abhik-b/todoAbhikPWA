import React, { Component } from "react";
import M from "materialize-css";
import FormLayout from "../containers/formlayout";
export default class AddTodo extends Component {
  componentDidMount() {
    var elems = document.querySelector(".modal");
    M.Modal.init(elems, {});
  }
  render() {
    return (
      <div>
        <div className="container center">
          <button
            style={{ marginTop: 10, marginBottom: 10 }}
            className="btn-floating btn-large green "
          >
            <i
              className="large material-icons modal-trigger "
              data-target="modal1"
            >
              note_add
            </i>
          </button>
        </div>

        <div id="modal1" className="modal">
          <FormLayout item="" desc="" id={null} />
          <i className="modal-close material-icons ">clear</i>
        </div>
      </div>
    );
  }
}
