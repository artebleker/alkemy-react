import React, {useState} from 'react';
import FoodDetail from './FoodDetail';

const Food = ({food}) => {
  
  const[show, setShow ]= useState(false)

    const {id, title, image} = food

  
    return (
      <div id={id} className="container container-fluid">
          <h2>{title}</h2>
          <img src={image} alt={title}/>
          {/* <a href="" target="_blank" rel='noopener noreferrer'>URL</a> */}
          <button className="btn btn-warning" onClick={()=> setShow(!show)}>Detalles</button>
          { show &&
          <FoodDetail idFood={id}/>
          }
          
      </div>
  )
};

export default Food;