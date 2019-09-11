import React, {Component} from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import './GridCard.scss';

class GridCard extends Component {
    state = {
        current_page: 1,
        currentCardData: [],
      }

    componentDidMount(){
        this.showCurrentContent(1);
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

    nextPage = () => {
        this.setState((prevState) => ({current_page: prevState.current_page+1 }),() => {
            this.showCurrentContent(this.state.current_page)
        });
    }

    prevPage = () => {
        this.setState((prevState) => ({current_page: prevState.current_page-1 }),() => {
            this.showCurrentContent(this.state.current_page)
        });
    }

    showCurrentContent = (pageNumber) => {
        const {cardsData} = this.props;
        debugger;
        let startCard = pageNumber===1 ? 0 : 5*(pageNumber-1);
        let endCard = startCard+5;
        let slicedCardData = cardsData.slice(startCard, endCard);
        this.setState({
            current_page: pageNumber,
            currentCardData: slicedCardData
        });
    }
    
    render(){
        const {cardsData, cardType} = this.props;
        const {currentCardData, current_page} = this.state;

        const pageNumbers = [];
        if (cardsData.length !== null) {
            for (let i = 1; i <= Math.ceil(cardsData.length / 5); i++) {
                pageNumbers.push(i);
            }      
        }

        let renderPageNumbers = pageNumbers.map(number => {
            return (
                <span key={number} className={current_page===number ? "active" : ""} onClick={() => this.showCurrentContent(number)}>{number}</span>
            );
        })

       return (
           <React.Fragment>
        <div className="row">
        {
            currentCardData.map((item, i) => { 
                return(
                    <div className="col-sm-4">
                        <div className={`card ${this.getClass(cardType)}`}>
                            <div className="card-body">                    
                                <h5 className="card-title">{item.name}</h5>
                                <Link className="card-link" to={`Books/${i+1}`}>Details</Link>
                            </div>                            
                        </div>
                    </div>
                );
            })  
        }
        </div>
        <div className="row">
            <div className="pagination">
                <span onClick={this.prevPage}>&laquo;</span>
                {renderPageNumbers}
                <span onClick={this.nextPage}>&raquo;</span>
            </div>
        
        </div>
        </React.Fragment>
       ); 
    }
}

export default GridCard;