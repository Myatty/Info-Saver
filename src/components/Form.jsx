/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [address, setAddress] = useState("");

  const trackName = (event) => {
    setName(event.target.value);
  };

  const trackGmail = (event) => {
    setGmail(event.target.value);
  };

  const trackAddress = (event) => {
    setAddress(event.target.value);
  };

  const addData = (event) => {
    
    event.preventDefault();

    const data = {
        name,
        gmail,
        address,
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
          onChange={trackName}
        />

        <input
          name="gmail"
          type="text"
          placeholder="Enter your Gmail Here"
          onChange={trackGmail}
        />

        <input
          name="address"
          type="text"
          placeholder="Enter your Address Here"
          onChange={trackAddress}
        />

        <button>Add New Info</button>
      </form>
    </>
  );
};

export default Form;
