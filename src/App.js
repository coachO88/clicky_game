import React, {Component}from 'react';
import './App.css';
import Clicky from './clicky';
import Rotate from './Components/rotate/rotate' ;

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        imagelink: [
          '../hank.jpg',
          '../karen.jpg',
          '../becca.jpg',
          '../levon.jpg',
          '../charlie.jpg',
          '../marcy.jpg',
          '../atticus.jpg',
          '../eddie.jpg',
          '../lew.jpg',
          '../mia.jpg',
          '../samurai.jpg',
          '../stu.jpg',
          '../sasha.jpg',
          '../julia.jpg',
          '../richard.jpg',
          '../faith.jpg'
        ],
        clicked:[],
        points: 0
      };
    };

    guess = (imgScr) => {
      console.log(imgScr);
        for (let i = 0; i < this.state.clicked.length; i++){
          if (this.state.clicked[i] !== imgScr) {
            this.setState({points: this.state.points + 1});

          }else{
            window.alert("Game Over!!")
            this.setState({points: 0});
            this.setState({clicked: []});
            console.log(this.state.clicked)
          }
        }

        if (this.state.points === 10){
          window.alert("Winner!!");
          this.setState({points: 0 });
          this.setState({clicked: []});
        }
        this.state.clicked.push(imgScr);
        console.log(this.state.clicked)
    };

    random = (event) => {

      var random = [];
      var copy = this.state.imagelink.slice();
        while (copy.length > 0) {
          let randomized = Math.floor(Math.random() * copy.length);
          let split = copy.splice(randomized, 1)[0];
          random.push(split);
        }

        this.setState({imagelink: random});
    }

    render(){

      return(
        <div className = "App">
          <header className = "grid-container App-header">
          <div className = "menu"><Clicky points = {this.state.points}/></div>

          <Rotate guess = {this.guess} random = {this.random} imagelink = {this.state.imagelink}/>
          
          </header>
        </div>
      );
    }
  }
  
export default App;
