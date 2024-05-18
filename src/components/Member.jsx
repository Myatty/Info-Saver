/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState, React} from "react";

const Member = (props) => {
  const [name, setName] = useState(props.name);
  const [gmail, setGmail] = useState(props.gmail);
  const [address, setAddress] = useState(props.address);

  return <div>
    <p>Name : {name}</p>
    <p>Gmail : {gmail}</p>
    <p>Address : {address}</p>
  </div>;
};

export default Member;
