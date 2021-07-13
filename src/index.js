import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';


const displaydata = Sdata.map((val, indexval) => {
  return(
    <Card 
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
    />
  );
});
ReactDOM.render(
<>

<h1 className="header_style">List of My Favourite Series</h1>

{displaydata}

</> ,
  document.getElementById('root')
  )
