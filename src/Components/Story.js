import React from 'react'; 

const Story = ({details}) => {

    return(
        <>
        <li>
            <h1><a href={details.url} target="_blank">{details.title} </a></h1>
        </li>
        </>
    );
    };

export default Story; 