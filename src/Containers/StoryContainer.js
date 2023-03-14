import React, {useState, useEffect} from "react";
import StoryList from "../Components/StoryList";
import Filter from "../Components/Filter";

const StoryContainer = () => {

    const [stories, setStories] = useState([]);
    const [filterStories, setFilteredStories] = useState([]);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')  //call api 
        .then(res => res.json())     //get results, turn into results.json
        .then((data) => {              //results.json = 'data'
            const copyStoryArray = [...data];     //make a copy of 'data' array into 'CopyStoryArray'
            const reducedStoryArray = copyStoryArray.splice(0, 25);         //reduce/splice 'CopyStoryAway' into 'reducedStoryArray' - index position 0 to 25.
            //console.log(reducedStoryArray)            //able to view in browser tools 'console' 
            


            //create 'promises' - copy 'id' within 'reducedStoryArray'.
            const promises = reducedStoryArray.map((id) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)    //loop the new array of 'promise' id's - injecting them into URL 
                .then((res) => res.json());
            });
            
            //provide data in 'promises' to 'Promise.All' 
            //update 'setStories' 

            Promise.all(promises).then((data) => {
                setStories(data)
            });
        });
    }, []); 

    //pass filter function down as props 
    const filter = (storySearch) => {
        const makeLowerCase= storySearch.toLowerCase();             //turn searchterm into lowercase    
        const filterStories = stories.filter((story) => {
            return story.title.toLowerCase().includes(makeLowerCase); 
        });
        
        setFilteredStories(filterStories);
    }

    

  

    return (
        //pass filter function down as props 
        <>
        <h1>Top Stories</h1>
        <Filter handleChange={filter}/>  
         <StoryList stories={filterStories}/>
        </>
    );

  

};

export default StoryContainer; 