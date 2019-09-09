import React,{Component} from "react";
import GridCard from "../../components/GridCard/GridCard";
import axios from 'axios';

class Books extends Component {
    state = {
        books: []
    }
    
    componentDidMount(){
    axios.get(`https://www.anapioficeandfire.com/api/books`)
        .then(res => {
        const books = res.data;
        this.setState({ books });
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2>Books</h2>
                <GridCard color="red" cardsData={this.state.books}></GridCard>
            </React.Fragment>
        )
    }
}

export default Books; 