import React from 'react'; 

const Story = ({details}) => {

    return(
        <>
        <li>
            <h1><a href={details.url} target="_blank">{details.title} </a></h1>
        </li>
        <li>
            <h3>Posted by: '{details.by}'</h3> 
        </li>
        <li>
        <h3> Score:{details.score}</h3>
        </li>
        </>
    );
    };

export default Story; 