import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import data from "./db/db.json";


function ViewStory() {

  const { id } = useParams();
  const navigate = useNavigate();

  const[story , setStory] = useState(null);
  const currentIndex = data.stories.findIndex((item) => item.id === Number(id));

  const showPreviousStory = () => {
    if (currentIndex > 0) {
      navigate(`/story/${data.stories[currentIndex - 1].id}`);
    }
  };

  const showNextStory = useCallback(() => {
    if (currentIndex === data.stories.length - 1) {
      navigate("/");
    } else {
      navigate(`/story/${data.stories[currentIndex + 1].id}`);
    }
  }, [currentIndex, navigate]);

  useEffect(()=>{
  fetch(`http://localhost:3000/stories/${id}`)
  .then((res)=>res.json())
  .then((data)=>setStory(data))
  .catch(err=>console.log(err))

},[id]);

useEffect(() => {
  const timer = setTimeout(() => {
    showNextStory();
  }, 5000);

  return () => clearTimeout(timer);
}, [showNextStory]);

  
    return (
      <div className="view-story">
        {story ? (
          <>
            <button className="story-click story-click-left" onClick={showPreviousStory} aria-label="Previous story"></button>
            <button className="story-click story-click-right" onClick={showNextStory} aria-label="Next story"></button>

            <div className="story-progress">
              {data.stories.map((item, index) => (
                <span className={index <= currentIndex ? "active" : ""} key={item.id}></span>
              ))}
            </div>

            <div className="story-user">
              <img src={story.image} alt={story.username} />
              <span>{story.username}</span>
            </div>

            <img className="story-view-image" src={story.image} alt={story.username} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
    
}

export default ViewStory
