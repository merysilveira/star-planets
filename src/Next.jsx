import React, { Component } from 'react';
import './Next.css';

class Next extends Component {

    constructor(props) {
        super(props);

        this.state = {
            refresh: [],
        }

        this.refreshPage = this.refreshPage.bind(this);
    }

    refreshPage(){ 
        window.location.reload(); 
    }
	
	render() {
        return (
            <button className="planet_next__button" type="button" onClick={this.refreshPage}>Next</button>
        );
    }
}

export default Next;