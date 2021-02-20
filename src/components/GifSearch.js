import React, { Component } from "react";

state = {
  search: "",
};

handleChange = (event) => {
  this.setState({ search: event.target.value });
};

handleSubmit = (event) => {
  event.preventDefault()
  this.props.handleSearch(this.state.search) 
}


export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>GifSearch</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control col-sm-9"
            name="search"
            placeholder="search for gifs"
            onchange={this.handleChange} //update state
            value={this.value.state} //value is tied to what's in state
            aria-describedby="search for gifs"
          />
          <input type="submit" value="Search" className="btn btn-primary col-sm-3"/>
        </div>
      </form>
    );
  }
}


/* 
Make sure to have closing tags, it's especially important for react.

When using Arrow functions this refers to the context of the class of that particular instance of the component. 

setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
*/