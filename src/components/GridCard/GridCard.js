import React, {Component} from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import './GridCard.scss';
import Pagination from "../Pagination/Pagination";

class GridCard extends Component {
    state = {
        currentCardData: [],
      }

    getClass = (cardType) => {
        if(cardType==="Books") {
            return "bookCard";
        } else if (cardType==="Characters") {
            return "characterCard";
        } else if (cardType==="Houses") {
            return "houseCard";
        }
    }

    updatePageContent = (slicedCardData) => {
        this.setState({
            currentCardData: slicedCardData
        });
    }
    
    render(){
        const {cardType, cardsData} = this.props;
        const {currentCardData} = this.state;

       return (
        <React.Fragment>
        <div className="row">
            {
                currentCardData.map((item, i) => { 
                    return(
                        <div className="col-sm-4">
                            <div className={`card ${this.getClass(cardType)}`}>
                                <div className="card-body">                    
                                    <h5 className="card-title">{item.name ? item.name : `${cardType} ${item.id}`}</h5>
                                    <Link className="card-link" to={`/${cardType}/${item.id}`}>Details</Link>
                                </div>                            
                            </div>
                        </div>
                    );
                })  
            }
        </div>
        <div className="row justify-content-center">
            <Pagination paginationData={cardsData} paginateAction={this.updatePageContent} cardsPerPage={5}/>
        </div>        
        </React.Fragment>
       ); 
    }
}

export default GridCard;