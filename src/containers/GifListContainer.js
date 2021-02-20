import React, { Component } from "react";
import GifSearch from "../components/GifSearch"; 
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor(props) {
    super(props);  //When you call super inside of a function we're calling the super class version of that function. The component class that has a function component, we want that function to be called with the props. When we define a constructor we want to make sure that react still behaves the way it's supposed to this is why we need to pass props to the react component constructor. super is calling the constructor from the class you're extending and passing in the same props you're passing in. The main purpose is so that props are bound to the object, and in order to setState() to work properly.  
    
    this.state = {
      gifs: [
        "https://media.giphy.com/media/l46CfphUZPc9GiRbi/giphy.gif"
      ] 


      // The only time when we manually assign state is in the constructor. This is because manually assigning state does not trigger the lifecycle events such as derieveStateFromProps, shouldComponentUpdate, render, etc.  It will only assign the state to a new value, which at the beginning is what we want.
      
      //We set gifs: [] to an array and not to something like null is because if we know something is going to be a particular data type and we will call methods on it, starting it off as an empty version of the same data type is a good idea. We can also use conditional logic with implementing null. 
    }
  }

  handleSearch = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
      .then(res => res.json())
      .then(gifsData => {
        const gifs = gifsData.data.slice(0, 3).map(gif => {
          return { title: gif.title, id: gif.id, url: gif.images.original.url}
        
        })
        this.setState({gifs}) //This was an array of strings now it's an array of objects  
    })
 }

  render() {
    return (
      <div>
        <h1>GifListContainer</h1>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}



/*
Alternative Ways: 

constructor(props){
  super(props)
  this.handleSearch = this.handleSearch.bind(this)
}  
<GifSearch handleSearch={ this.handleSearch } /




*/ 