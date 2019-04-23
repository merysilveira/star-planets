import React, { Component } from 'react';
import './ListInfo.css';

class ListInfo extends Component {
	
	render() {
		const info = this.props.listInfo;
		return (
			<div className="planet_infos__wrap">
				<ul className="planet_infos_list">
					<li>Population: <span>{info.population}</span></li>
					<li>Climate: <span>{info.climate}</span></li>
					<li>Terrain: <span>{info.terrain}</span></li>
				</ul>
				<p className="planet_infos_films">Featured in {info.films.length} films</p>
			</div>
		);
    }
}

export default ListInfo;