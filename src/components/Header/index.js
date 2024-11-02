import './index.css'

const Header = props => {
  const {score, remainingSec} = props

  return (
    <nav className="nav-container">
      <ul className="nav-content">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </li>
        <li className="score-and-time-container">
          <div className="score-container mr-4">
            <p className="score-text mr-1">Score: </p>
            <p className="score-count">{score}</p>
          </div>
          <div className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img mr-2"
            />
            <p className="time">{remainingSec} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Header
