import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'


function App() 
{
  var diceImage = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ]
  const [image, setNewImage] = useState(diceImage[0])
  const [image2, setNewImage2] = useState(diceImage[1])

  const rollDice =() => {
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImage[randomNum1]);
    setNewImage2(diceImage[randomNum2]);


  }
          return (
            <div className="App">
              <div>
              <h1 id='welcome'>welcome to adas dice roller</h1>
              <div className="container">
                <img className="square" src={image} alt=''></img>
                <div style={{width:'5px', display: 'inline-block'}}></div>
                <img className="square" src={image2} alt=''></img>
              </div>
              <Button variant="outline-danger" onClick={rollDice}>Roll Dice</Button>{' '}
              </div>
            </div>
          );
        }
      
export default App;
