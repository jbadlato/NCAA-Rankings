import React, { Component } from 'react';
import RankingsContainer from './RankingsContainer.js';
import RankingsDateMenu from './RankingsDateMenu.js';
import RankingsHeader from './RankingsHeader.js';

class RankingsPage extends Component {
  render() {
    return (
      <div>
		<div className="container">
			<RankingsHeader league_name={this.props.match.params.league_name} season={this.props.match.params.season} />
			<div className="row">
				<h4 className="col-xs-5">Showing rankings calculated on: {this.props.match.params.date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</h4>
				<RankingsDateMenu league_name={this.props.match.params.league_name} season={this.props.match.params.season} className="col-xs-2" />
				<div className="col-xs-5" />
			</div>
		</div>
        <RankingsContainer league_name={this.props.match.params.league_name} season={this.props.match.params.season} date={this.props.match.params.date} />
      </div>
    );
  }
}

export default RankingsPage;
