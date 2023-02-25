// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onClickShowHideFirstNameButton = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClickShowHideLastNameButton = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              type="button"
              className="btn"
              onClick={this.onClickShowHideFirstNameButton}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
            <button
              type="button"
              className="btn"
              onClick={this.onClickShowHideLastNameButton}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
