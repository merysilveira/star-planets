import React, { Component } from 'react';
import List from './List';
import axios from 'axios';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            planet: [],
        }

        this.getPlanet = this.getPlanet.bind(this);
        this.getPlanets = this.getPlanets.bind(this);
    }

    getPlanets() {
        return axios.get('https://swapi.co/api/planets/')
    }

    getPlanet(id='') {
        return axios.get('https://swapi.co/api/planets/' + id)
        .then((response) => {
            if (id === '') {
                this.setState({ planet: response.data.results })
            } else {
                this.setState({ planet: [response.data] })
            }
        })
    }

    componentDidMount(){
        this.getPlanets().then((response) => {
            const count = response.data.count
            const randId = Math.floor((Math.random() * count) + 1)
            this.getPlanet(randId)
        })
    }

    render() {
        const {planet} = this.state;
        return (
            <div className="planet__wrap">
                <List planet={planet} />
            </div>
        );
    }

}

export default App;
