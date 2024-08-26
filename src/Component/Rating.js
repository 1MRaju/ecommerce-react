import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

function Rating({rating,onClick,style}) {
    return (
        <>
          {[...Array(5)].map((_,i)=>(
                <span key={i} 
                onClick={()=>onClick(i)} 
                style={style}>
                {rating >i ?(
                <AiFillStar fontSize="18px" color="#FF9529"/>
            ):(
                <AiOutlineStar fontSize="18px" color="#FF9529"/> 
            )}
            </span>
        ))}
        </>
    );
}

export default Rating;