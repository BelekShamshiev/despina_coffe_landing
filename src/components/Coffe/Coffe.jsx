import React from "react";
import "./Coffe.css";
import late from "../../assets/late.png";
const Coffe = ({img , coffeName , price , title}) => {
  return (
    <div className="container_coffe">
      {/* <div className="coffe">
        <div className="Coffe_d">
          <img src={late} alt="" />
        </div>
        <div className="Coffe_p">
          <p>CAFFE LATE</p>
          <p className="p_c"> $ 15</p>
        </div>
      </div>
      <div className="p_-">
        <p>----------------------------------------------------------</p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus <br /> et
          malesuada fames
        </p>
      </div> */}
      <div className="cofe">
        <div className="img_disk">
            <img src={img} alt="" />
        </div>
        <div>
            <div className="cofe2">
                <h3>{coffeName}</h3>
                <p>$ {price}</p>
            </div>
            <div className="huina">
                --------------------------------------------------------
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Coffe;