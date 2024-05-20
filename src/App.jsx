/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Form from './components/Form'
import Member from './components/Member'
import './App.css'

function App() {

  const [members, setMember] = useState([]);

  const addNewMember = (memberInfo) => {
    const name = memberInfo.name.current.value.trim();
    const gmail = memberInfo.gmail.current.value.trim();
    const address = memberInfo.address.current.value.trim();

    if (name.length === 0 || gmail.length === 0 || address.length === 0) {
      alert("Data is incomplete");
    } else {
      const newMember = {
        name,
        gmail,
        address,
      };
      setMember([...members, newMember]);
    }
  };
        

  let promptData = <p>There is no member rightNow!</p>;

  if(members.length != 0){
    promptData = members.map((member, index) => (
      <Member key={index} name={member.name} gmail={member.gmail} address={member.address} ></Member>
    ))
  }

  return (
    <section>
      <Form addNewMember={addNewMember} />

      <div>
        {promptData}
      </div>

    </section>
  )
}

export default App
