import React from 'react';
import ReactDOM from 'react-dom';

class PlantPrep extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Compz is Lyfe'
        const options = ['thing1.2', 'thing2', 'thing4'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Box />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class Box extends React.Component {
    render() {
        return (
            <div>
                <img src="./assets/landing3.jpg"></img>
            </div>
        )
    }
}

ReactDOM.render(<PlantPrep />, document.getElementById('app'))