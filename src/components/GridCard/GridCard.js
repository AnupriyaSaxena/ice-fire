import React, {Component} from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import './GridCard.scss';
import BookDetails from "../../pages/BookDetails/BookDetails";

class GridCard extends Component {
    
    render(){
    const cardsData = this.props.cardsData;
       return (
        <div className="row">
        {
            cardsData.map((item, i) => { 
                return(
                    <div className="col-sm-4">
                        <div className={`card ${this.props.color}`}>
                            <div className="card-body">                    
                                <h5 className="card-title">{item.name}</h5>
                                <Link className="card-link" to={`/${i+1}`}>Books</Link>   
                                <Route path="/:id" component={BookDetails} />            
                            </div>                            
                        </div>
                    </div>
                );
            })  
        }
        </div>
       ); 
    }
}

export default GridCard;