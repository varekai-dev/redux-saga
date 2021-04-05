import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  submitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({ title: "" });
  };
  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post header</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
            name="title"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
