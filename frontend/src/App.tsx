import './App.css'
import Heading from './Heading'
import BowlerList from './BowlerList'

function App() {
  return (
    <div className="page-container">
      {/* Calling the components */}
      <Heading />
      <BowlerList />
    </div>
  )
}

export default App