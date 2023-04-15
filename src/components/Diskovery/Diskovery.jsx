import React from "react";
import "./Diskovery.css";
import Coffe from "../Coffe/Coffe";
import { Button, Space } from "antd";
import {menu} from "../../constants/menu"
const Diskovery = () => {
    
  return (
    <div className="Diskovery">
        <div className="Diskovery_title">
            <h1>Discover Menu</h1>
            <p>What Happens Here</p>
        </div>
        <div className="Menu_coffees">
        {menu.map(item => (
            <Coffe {...item}/>
        ))}
        <div className="btn_disk">
          <Button className="btn_disk" ghost>Explore Full Menu</Button>
        </div>
        </div>
    </div>
  );
};

export default Diskovery;