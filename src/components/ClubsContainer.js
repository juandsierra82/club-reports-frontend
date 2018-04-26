import React, { Component } from 'react'
import axios from 'axios'

class ClubsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      clubs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/clubs')
      .then(response => {
        console.log(response)
        this.setState({clubs: response.data})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
      hello
        {this.state.clubs.map((club) => {
          return (
            <div className="tile" key={club.id} >
              <h4>{club.name}</h4>

            </div>
          )
        })}
      </div>
    );
  }
}

export default ClubsContainer
