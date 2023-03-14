import React from 'react'; 
import Story from './Story';

const StoryList = ({stories}) => {

    const storyList = stories.map((story, id) => {
        return (<Story key ={id} details={story} position ={id+1} />)
    });

    return(
        <>
        <ul>
            {storyList}
        </ul>
        </>
    );
};

export default StoryList; 