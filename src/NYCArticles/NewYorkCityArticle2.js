import React from "react";

class NewYorkCityArticle2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: [],
            map: null
        }
    }

    async componentDidMount() {      
                
    }

    render() {            
        return (<div>       
            <div>     
                <h1> Best resturant in every Manhattan neighborhood </h1>       
                <h2> Alphabet City -  </h2>
                <h2> Battery Park City - Dig </h2>
                <h2> Central Park - Express Cafe in the Loeb Boathouse </h2>
                <h2> Chelsea - Bottino </h2>
                <h2> Chinatown - Kong Sihk Tong </h2>
                <h2> Civic Center - Potbelly Sandwich Shop </h2>        
                <h2> East Harlem - Texas Chicken and Burgers </h2>
                <h2> East Village - Nowan </h2>
                <h2> Financial District - Bao Bao </h2>
                <h2> Flatiron District - </h2>
                <h2> Garment district - Chef Yu </h2>
                <h2> Gramercy - Bite </h2>
                <h2> Greenwich village - Tue Thai Food </h2>                
                <h2> Harlem - Manna's </h2>
                <h2> Hell's Kitchen - </h2>
                <h2> Hudson Square - </h2>
                <h2> Inwood - </h2>
                <h2> Kips Bay - </h2>
                <h2> Koreatown - Antoya KBBQ </h2>
                <h2> Lower East Side - Sweet Chick </h2>
                <h2> Little Italy - Gelso and Grand </h2>
                <h2> Meatpacking District - </h2>
                <h2> Midtown East - Obao </h2>
                <h2> Midtown South - </h2>
                <h2> Midtown West - Ivan Ramen Slurp Shop </h2>
                <h2> Morning Side Heights - Tom's </h2>
                <h2> Murray Hill - Sushi Ryusei </h2>
                <h2> NoHo - </h2>
                <h2> Nolita - </h2>
                <h2> NOMAD - KazuNori </h2>
                <h2> Roosevelt Island - </h2>
                <h2> SOHO - Fanelli’s Cafe </h2>
                <h2> Stuyvesant Town - Ess-a-Bagel </h2>
                <h2> Tribeca - Bubby's </h2>                
                <h2> Union Square - </h2>
                <h2> Upper East Side - Vietnaam </h2>
                <h2> Upper West Side - Sushi Kaito </h2>
                <h2> West Village - </h2>
            </div>    
        </div>)
    }
}

export default NewYorkCityArticle2