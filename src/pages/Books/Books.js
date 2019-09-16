import React,{Component} from "react";
import GridCard from "../../components/GridCard/GridCard";
import cardApis from '../../apis/cardApis';
import {getFormattedDataWithID} from "../../helpers/helpers";

class Books extends Component {
    state = {
        books: []
    }
    
    componentDidMount(){
    cardApis.get(`/books`)
        .then(res => {
        const books = res.data ? getFormattedDataWithID(res.data) : [];
        this.setState({ books });
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2>Books</h2>
                { this.state.books.length>0 &&
                <GridCard cardType="Books" cardsData={this.state.books}></GridCard>
                }
            </React.Fragment>
        )
    }
}

export default Books; 