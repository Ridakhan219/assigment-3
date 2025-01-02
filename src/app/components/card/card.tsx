import React from 'react'
interface ICardProps {
  heading?:string;
  paragraph:string;
  color:string;
}

const Card = (Props :  ICardProps ) => {
  const  {heading ="heading blabla" , paragraph , color} = Props
  return (
    <div className={`${color} m-2 `}>
      
       <div className="card-heading"> <h1>{heading}</h1></div>
        <div className="card-body"><p>{paragraph}</p></div>
       <div className="card-footer"></div>
       <button> click </button>
       </div>
       
    
    
  
    
    
  )
}

export default Card
