import data from './db/db.json'

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="current-user">
        <img src={data.stories[0].image} alt="prince_dileeb" />
        <div>
          <strong>prince_dileeb</strong>
          <span>dileeb</span>
        </div>
        <button>Switch</button>
      </div>

      <div className="suggestion-title">
        <strong>Suggested for you</strong>
        <button>See all</button>
      </div>

      {data.suggestions.map((suggestion) => (
        <div className="suggestion-user" key={suggestion.id}>
          <img src={suggestion.profileImage} alt={suggestion.username} />
          <div>
            <strong>{suggestion.username}</strong>
            <span>Suggested for you</span>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
