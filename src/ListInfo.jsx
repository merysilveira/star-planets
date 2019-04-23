import React, { Component } from 'react';
import './ListInfo.css';

class ListInfo extends Component {

	/*constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }*/

    /*open() {
    	this.setState({ expanded: !this.state.expanded })
    }

    close() {
    	this.setState({ expanded: !this.state.expanded })
    }*/
	
	render() {
		const info = this.props.listInfo;

		/*if(!this.state.expanded) {
			return <p className="btn btn-info" onClick={this.open}>Show info</p>
		}*/

		return (
			<div className="planet_infos__wrap">
				{/*<p className="btn btn-danger" onClick={this.close}>Hide Info</p>*/}
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