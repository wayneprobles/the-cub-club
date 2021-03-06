import { useState } from "react";
import brownBear from './creation-assets/brown-bear-front.png';
import blackBear from './creation-assets/black-bear-front.png';
import whiteBear from './creation-assets/white-bear-front.png';
import pandaBear from'./creation-assets/panda-bear-front.png';
import { createBear } from "../../services";
import { useHistory } from "react-router";

const Avatar = (props) => {
  const [fur, setFur] = useState("brown");
  const history = useHistory();
  const { id } = props.user;
  const bearSubmit = async (e) => {
    try {
    e.preventDefault();
    const newBear = {
      fur,
    };
    const bear = await createBear(id, newBear);
    props.setUser(bear);
    // push user to game room
    history.push("/game");
  } catch (e) {
    console.error(e.message)
  }
    
  }

  return (
    <container className="avatar-creation">
    <form className="avatar-form" onSubmit={bearSubmit}>
      <label htmlFor="fur">Fur:</label>
      <select id="fur" onChange={(e) => setFur(e.target.value)}>
        <option value={"brown"}>Brown Bear</option>
        <option value={"black"}>Black Bear</option>
        <option value={"white"}>Polar Bear</option>
        <option value={"panda"}>Panda Bear</option>
      </select>
      <button className="avatar-button" type="submit">Done!</button>
    </form>
    <img
    src={fur === "brown" ? (
      brownBear
    ) : fur === "black" ? (
       blackBear
    ) : fur === "white" ? (
       whiteBear
    ) : (
       pandaBear
    )} alt="bear avatar"/>
    </container>
  );
};

export default Avatar;
