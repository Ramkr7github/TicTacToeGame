import React, {useState} from "react"

import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Button, Container, Row, Col} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray= new Array(9).fill("empty")
function App() {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage]=useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9)
    
  }

  const checkIsWinner = () => {

    //1st Horizontal row logic
    if (itemArray[0]=== itemArray[1] &&
      itemArray[0]=== itemArray[2]&&
      itemArray[0]!== "empty")
      {
       setWinMessage(`${itemArray[0]} wins`)
      }

      //2nd Horizontal row logic
      else if(
        itemArray[3]!== "empty" &&
        itemArray[3]=== itemArray[4] &&
        itemArray[4]=== itemArray[5]
        )
        {
         setWinMessage(`${itemArray[3]} wins`)
        }
 
        //3rd Horizontal row logic
        else if(
          itemArray[6]!== "empty" &&
          itemArray[6]=== itemArray[7] &&
          itemArray[7]=== itemArray[8]
          )
          {
           setWinMessage(`${itemArray[6]} wins`)
          }
         
           //1st Vertical row logic

          else if(
            itemArray[0]!== "empty" &&
            itemArray[0]=== itemArray[3] &&
            itemArray[3]=== itemArray[6]
            )
            {
             setWinMessage(`${itemArray[0]} wins`)
            }
       
             //2nd Vertical row logic

            else if(
              itemArray[1]!== "empty" &&
              itemArray[1]=== itemArray[4] &&
              itemArray[4]=== itemArray[7]
              )
              {
               setWinMessage(`${itemArray[1]} wins`)
              }
              
          //3rd Vertical row logic

              else if(
                itemArray[2]!== "empty" &&
                itemArray[2]=== itemArray[5] &&
                itemArray[5]=== itemArray[8]
                )
                {
                 setWinMessage(`${itemArray[2]} wins`)
                }

         //Horizonatal middle row win logic

                else if(
                  itemArray[0]!== "empty" &&
                  itemArray[0]=== itemArray[4] &&
                  itemArray[4]=== itemArray[8]
                  )
                  {
                   setWinMessage(`${itemArray[0]} wins`)
                  }
                  
                  //vertical middle row win logic

                  else if(
                    itemArray[2]!== "empty" &&
                    itemArray[2]=== itemArray[4] &&
                    itemArray[4]=== itemArray[6]
                    )
                    {
                     setWinMessage(`${itemArray[2]} wins`)
                    }

                     //Digonally win login

                    else if(
                      itemArray[1]!== "empty" &&
                      itemArray[1]=== itemArray[5] &&
                      itemArray[5]=== itemArray[9]
                      )
                      {
                       setWinMessage(`${itemArray[1]} wins`)
                      }
                //Digonally win login
                      else if(
                        itemArray[3]!== "empty" &&
                        itemArray[3]=== itemArray[5] &&
                        itemArray[5]=== itemArray[7]
                        )
                        {
                         setWinMessage(`${itemArray[3]} wins`)
                        }
  }

  const changeItem = itemNumber => {
    if(winMessage) {
      return toast(winMessage, { type: "success"})
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }
    else{
      return toast("already filled", {type: "error"})
    }
     
    checkIsWinner();

  }
  return (
    <Container className="p-5">
      <ToastContainer position="Bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3" >
       {winMessage ? (
        <div className="mb-2 mt-2">
          <h1 className="text-success text-uppercase text-center">
            {winMessage}
          </h1>
          <Button
          color="success"
          block
          onClick={reloadGame}
          > Reload Game </Button>
        </div>
       ) :(
        <h1 className="text-FaCentercode text-warning"> 
        {isCross ? "cross" : "circle"} turns
        </h1>
       )}
       <div className="grid">
      {itemArray.map((item, index) => (
          <Card color="warning" onClick={ () => changeItem(index)}>
            <CardBody className="box">
             <Icon name={item} />
              </CardBody>

          </Card>
        ))}
       </div>
       <Button className="mt-4"
          color="success"
          block
          onClick={reloadGame} >Reset Game</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
