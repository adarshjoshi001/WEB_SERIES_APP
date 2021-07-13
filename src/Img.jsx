import React from 'react';

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300" ;
const img3 = "https://picsum.photos/200/350";
const link = "https://www.youtube.com/watch?v=z-Z5radvnOA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15";
//JSX

function Img(){
    return(
        <div className="img_div">
        <img src = {img1}  alt="random1"/>
        <img src = {img2} alt="random2"/>
        <a href = {link}>
        <img src = {img3} alt="random3"/>
        </a>
    </div>
    );
}

export default Img;