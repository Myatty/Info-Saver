/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Form from './components/Form'
import Member from './components/Member'
import './App.css'

function App() {

  const [members, setMember] = useState([]);

  const addNewMember = (memberInfo) => {

    if(memberInfo.name.trim().length === 0 ||
     memberInfo.gmail.trim().length === 0 ||
      memberInfo.address.trim().length === 0){
      
        alert("Data is incomplete");
      }
      else{
        setMember([...members, memberInfo]);

      }
    }
        

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
