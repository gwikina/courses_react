import React from 'react';


function Selected(props){
    return(
        
            <div>  
                {props.list.map((element) => {
                    return(
                        <p className="text-center">{element.name} -- {element.desc}</p>
                   );
                })} 
            </div>
    );
}

export default Selected;
