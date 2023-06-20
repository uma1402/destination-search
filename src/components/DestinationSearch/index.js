// Write your code here
import './index.css'
import {Component} from 'react'
import Destinationitem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {input: ''}

  updatestate = event => {
    this.setState({input: event.target.value})
  }

  render(){
    const {destinationsList} = this.props
    const {input} = this.state

    const filteredinput = destinationsList.filter(each => (each.name.includes(input))


    return(
      <div className="bg">
        <div className="u">
          <h1>Destination Search</h1>

          <input
            onChange={this.updatestate}
            placeholder="search"
            className="input"
            type="search"
          />
          <ul className="listitems">
            {filteredinput.map(a => (
              <Destinationitem item={a} Uniquekey={a.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
