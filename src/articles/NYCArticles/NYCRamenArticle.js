import React from "react";

class NYCRamenArticle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {            
        return (            
            <div>
                <h1> NYC Ramen guide </h1>
                <ul>
                    <li>Ajisen</li>
                    <li>Ichiran</li>
                    <li>Ramen Goku</li>
                    <li>Tenho Ramen</li>                  
                    <li>Zen Ramen & Sushi</li>
                </ul> 
        </div>)
    }
}

export default NYCRamenArticle