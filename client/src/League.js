import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class League extends Component {
  render() {
    return (
    	<div className="league-container container">
	      <Link className="league-link" to={'/league/'+this.props.league.name+'/ranks'}>
	      	<img className="league-logo" src={'/img/leagues/' + this.props.league.logo_file} title={this.props.league.name.split('_').join(' ')} alt={this.props.league.name} />
	      </Link>
      </div>
    );
  }
}

export default League;