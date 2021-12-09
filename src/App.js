import './App.css';
import EnterRoom from './Component/EnterRoom';
import { useState } from 'react';
import DecisionButtons from './Component/DecisionButtons';
import CreateRoom from './Component/CreateRoom';
import EnterName from './Component/EnterName';
import axios from 'axios'

function App() {
/*
  axios.get('http://localhost:8080/').then(
    function (response) {
      console.log(response);
    }
  ).catch(function (error) {
    console.log("error");
    console.log(error);
  });
get
*/
  const [enterRoomVisible, setEnterRoomVisible] = useState(false);
  const [createRoomVisible, setCreateRoomVisible] = useState(false);
  const [decisionButtonsVisible, setDecisionButtonsVisible] = useState(false);
  const [enterNameVisible, setEnterNameVisible] = useState(true);
  const [name, setName] = useState();
  const [nameVisible, setNameVisible] = useState(false)
  const [roomName, setRoomName] = useState();
  const [password, setPassword] = useState();
  const [startAmount, setStartAmount] = useState();
  const [bigBlind, setBigBlind] = useState();
  
  const onCreate = () => {
    setDecisionButtonsVisible(false);
    setCreateRoomVisible(true)
  }

  const onEnter = () => {
    setDecisionButtonsVisible(false);
    setEnterRoomVisible(true)
    
  }

  const onNameSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setEnterNameVisible(false);
    setDecisionButtonsVisible(true);
    setNameVisible(true);
  }

  const onSubmitEnterRoom = (e) => {
    e.preventDefault();
    console.log(roomName + "\n" + password)
    setEnterRoomVisible(false);
    //open Room ?
    axios.get('http://localhost:8080/enter-room/', {
      params: {
        room_id: roomName,
        password: password
     }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onSubmitCreateRoom = (e) => {
    e.preventDefault()
    console.log(roomName + "\n" + password + "\n" + startAmount + "\n" + bigBlind);
    setCreateRoomVisible(false);
    axios.post('http://localhost:8080/create-room/', {
      room_id: roomName,
      password: password,
      big_blind: bigBlind,
      start_amount: startAmount
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <div className="app-roomcomp">
        { 
          enterRoomVisible && <EnterRoom onSubmit={onSubmitEnterRoom} setPassword={ setPassword} setRoomName={setRoomName} onClickX={() => {
            setEnterRoomVisible(false)
            setDecisionButtonsVisible(true)
          }} /> 
        }
        {
          decisionButtonsVisible && <DecisionButtons onCreate={onCreate } onEnter={ onEnter}/>
        }
        {
            createRoomVisible && <CreateRoom onSubmit={onSubmitCreateRoom} setStartAmount={setStartAmount} setPassword={setPassword} setRoomName={setRoomName} setBigBlind={setBigBlind} onClickX={() => {
            setCreateRoomVisible(false)
            setDecisionButtonsVisible(true)
          }} /> 
        }
        {
          enterNameVisible && <EnterName onSubmit={onNameSubmit} setName={setName}/>
        }
        {
          nameVisible && <label className='name-label'>{name}</label>
        }
      </div>
    </div>
  );
}

export default App;
