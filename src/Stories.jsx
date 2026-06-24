import data from './db/db.json'
import { Link } from 'react-router-dom'

function Stories() {
  return (
    <section className="stories">
      {data.stories.map((story) => (
        <Link to={`/story/${story.id}`} className="story" key={story.id}>
          <div className="story-ring">
            <img src={story.image} alt={story.username} />
          </div>
          <span>{story.username}</span>
        </Link>
      ))}
    </section>
  )
}

export default Stories
