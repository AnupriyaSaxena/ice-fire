import React, {Component} from "react";
import './Pagination.scss';

class Pagination extends Component {
    state = {
        current_page: 1,
      }

    componentDidMount(){
        this.showCurrentContent(1);
    }

    setInitialValues = () => {
        const {paginationData} = this.props;
        const {current_page} = this.state;
        const pageNumbers = [];
        if (paginationData.length !== null) {
            for (let i = 1; i <= this.getTotalPages(); i++) {
                pageNumbers.push(i);
            }      
        }

        return pageNumbers.map(number => {
            return (
                <span key={number} className={current_page===number ? "active" : ""} onClick={() => this.showCurrentContent(number)}>{number}</span>
            );
        })

    }

    getTotalPages = () => {
        const {paginationData, cardsPerPage} = this.props;
        const lastPage = Math.ceil(paginationData.length / cardsPerPage);
        return lastPage;
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
        const {paginationData, cardsPerPage} = this.props;
        let startCard = pageNumber===1 ? 0 : cardsPerPage * (pageNumber-1);
        let endCard = startCard + cardsPerPage;
        let slicedCardData = paginationData.slice(startCard, endCard);
        this.setState({
            current_page: pageNumber,
        });
        this.props.paginateAction(slicedCardData);
    }
    
    render(){
       const {current_page} = this.state;
       return (
        <div className="row">
            <div className="pagination">
                <span className={current_page===1 ? "disabled" : ""} onClick={this.prevPage}>&laquo;</span>
                {this.setInitialValues()}
                <span className={current_page===this.getTotalPages() ? "disabled" : ""} onClick={this.nextPage}>&raquo;</span>
            </div>        
        </div>
       ); 
    }
}

export default Pagination;