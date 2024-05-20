/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState, useRef } from "react";

const Form = (props) => {
  // const [name, setName] = useState("");
  // const [gmail, setGmail] = useState("");
  // const [address, setAddress] = useState("");

  const nameInputRef = useRef();
  const gmailInputRef = useRef();
  const addressInputRef = useRef();

  // const trackName = (event) => {
  //   setName(event.target.value);
  // };

  // const trackGmail = (event) => {
  //   setGmail(event.target.value);
  // };

  // const trackAddress = (event) => {
  //   setAddress(event.target.value);
  // };

  const addData = (event) => {
    
    event.preventDefault();

    const data = {
      name : nameInputRef,
      gmail : gmailInputRef,
      address : addressInputRef,
    }

    console.log('Data was Sent');
    props.addNewMember(data);
  };

  return (
    <>
      <form action="" onSubmit={addData}>
        <input
          name="name"
          type="text"
          placeholder="Enter your Name Here"
          //onChange={trackName}
          ref={nameInputRef}
        />

        <input
          name="gmail"
          type="text"
          placeholder="Enter your Gmail Here"
          //onChange={trackGmail}
          ref={gmailInputRef}
        />

        <input
          name="address"
          type="text"
          placeholder="Enter your Address Here"
          //onChange={trackAddress}
          ref={addressInputRef}
        />

        <button>Add New Info</button>
      </form>
    </>
  );
};

export default Form;
