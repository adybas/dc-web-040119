import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {votingForPainting, votedForPainting} from '../redux/actions'

class PaintingDetail extends React.Component {
  render() {
    // console.log("PaintingsDetail's props: ", this.props)
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {
            this.props.vote(this.props.painting.id)
            this.props.voted(this.props.painting.id)}
          }
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}
//prop: store.something
const mapStateToProps = (state, ownProps) => {
  // console.log("What is own props?", ownProps)
  return{
    painting: state.paintings.find(
      painting => painting.id === ownProps.match.params.paintingId
    )
  }
}
//prop: a dispatch/a function
//We need to return an object that mapps props for thie component to a function
//that dispatches an action object

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (paintingId) => {dispatch(votingForPainting(paintingId))},
    voted: (paintingId) => {dispatch(votedForPainting(paintingId))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(PaintingDetail));
