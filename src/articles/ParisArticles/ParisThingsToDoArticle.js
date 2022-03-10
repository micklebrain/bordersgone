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
                    <li> Catacombs </li>
                    <li> Cheese tasting </li>
                    <li> Moulin Rogue show </li>                     
                    <li> Wine tasting </li>
                </ul>

                <h2> Monuments </h2>
                <li> Arc de Triomphe </li>
                <li> Eiffel Tower </li>                
                <li> Musee d’Orsay </li>
                <li> Palais Garnier </li>
                <li> Pantheon </li>

                <h2> Musuems </h2>
                <li> Louvre </li>

                <h2> Seine River boat / cruise tour </h2>                
                <li> Bateaux Mouches seina cruise </li>
                <li> Bateaux Parisiens seina cruise </li>
                <li> BatoBus hop on hop off cruise </li>

                <iframe src="https://www.google.com/maps/d/embed?mid=1MGy4jfdB2-kJmiaFrmzqt44T3fnTcu1n&ehbc=2E312F" width="640" height="480"></iframe>
            </div>)
    }
}

export default ParisThingsToDoArticle