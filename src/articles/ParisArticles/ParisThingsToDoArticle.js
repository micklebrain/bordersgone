import React from "react";

class ParisThingsToDoArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
            <div>
                <h1> Things to do in Paris </h1>
                <ul>
                    <li> Arc de Triomphe </li> 
                    <li> Boat tour </li>
                    <li> Catacombs </li>
                    <li> Cheese tasting </li>
                    <li> Eiffel Tower </li>
                    <li> Louvre </li>
                    <li> Musee d’Orsay </li>                    
                    <li> Palais Garnier </li>
                    <li> Pantheon </li>
                    <li> Seine River boat / cruise tour </li>
                    <li> Wine tasting </li>
                </ul>
            </div>)
    }
}

export default ParisThingsToDoArticle