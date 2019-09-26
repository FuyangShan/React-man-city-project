import React from "react";
import PromotionAnimation from "./Animation";
import Enroll from "./Enroll";

const Promotion = () => {
    //centered thing would be using container

    return (
        <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
            <div className="container">
                <PromotionAnimation />
                <Enroll />
            </div>
        </div>
    );
};

export default Promotion;
