import React, { Component } from 'react';
import ListInfo from './ListInfo';
import './List.css';

class List extends Component {
	
	render() {
        const planet = this.props.planet;
        return (
    		planet.map((pl) => {
    			console.log(pl)
    			return (
    				<div key={pl.url}>
    					<div className="planet__header">
                            <h1 className="planet__header_name">{pl.name}</h1>
                        </div>
    					<ListInfo listInfo={pl} />
    				</div>
    			)
    		})
        );
    }
}

export default List;