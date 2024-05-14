import React from 'react';

//This would be the used to make a get request for this API
import axios from 'axios';

import './App.css';

class App extends React.Component {
  //this is like a global object, that contains all of the most important thing when it comes to that specific component like in this case this App.

  //Data Storage: The state object serves as a storage mechanism for holding data that is expected to change over time. In this component, the advice property of the state object holds the advice fetched from the API.

  //Within the component's render() method, the advice property of the state object is accessed using destructuring (const {advice} = this.state;). This allows the component to access the current value of advice stored in the state and use it in the JSX returned by the render() method.
  state={ advice: '' };

  //everything in react goes under a life-cycle (When we clicked that advice button we recieved a new quote everytime (API generation was used in that))

  //This executes at exactly at the time of our render().
  componentDidMount(){
    //We need the data initially in the class for rendering, hence we will call the fetchAdvice() function here.
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    // This is a public API which fetches random advice
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const{advice} = response.data.slip;
        this.setState({advice});//This was done so that this advice could be displayed on the screen, for that we used the 'state' defined beforehand in the class. (In reality the synatx is like "this.setState({ advice: advice })")
        //Just a nice way of structuring the block of code
      })
      .catch((error) => { 
        console.log(error);
      });
  }
  

  //This method is a required method in React class components. It defines what the component should render to the DOM when it's rendered by a parent component.
  render(){
    const {advice} = this.state;
    return(
      //When the App component is rendered, this JSX will be translated into actual HTML elements and displayed on the web page.
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>GIVE ME A QUOTE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
