import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <>
      <Sidebar />
      <div className="app-shell">
        <main className="feed-column">
          <Feed />
        </main>
        <aside className="suggestions-column">
          <Suggestions />
        </aside>
      </div>
    </>
  )
}

export default App
