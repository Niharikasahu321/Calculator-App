import React,{useEffect, useRef} from 'react';

import './Header.css';

function Header(props) {
    // console.log("res",props.result);
    // console.log("expression",props.expression);
    const resultRef=useRef();
    const expressionRef = useRef();
    console.log(props.history);
    useEffect(()=>{
     resultRef.current.scrollIntoView();
    },[props.history]);
    useEffect(()=>{
        expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
    },[props.expression]);
  return (
    <div className="header custom-scroll">
       <div className="header_history">
        {   
            Array.isArray(props.history )&&
            props.history.map(item=>(<p key={item + "" + Math.random() * 44 } >{item}</p>
            )) }
       </div>
   <br/>
       <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
       </div>
       <p ref={resultRef} className="header_result">{props.result}</p>
    </div>
  );
}

export default Header;

