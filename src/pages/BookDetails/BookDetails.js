import React,{Component} from "react";
import axios from 'axios';

class BookDetails extends Component { 
    state = {
        bookDetailsData: []
    }
    
    componentDidMount(){
        const bookId= this.props.match.params.id;
        axios.get(`https://www.anapioficeandfire.com/api/books/${bookId}`)
        .then(res => {
            const bookDetails = res.data;
            this.setDetailsData(bookDetails);            
        })
    }

    setDetailsData = (bookDetails) => {
        const booksLabelConfig = {
            name: "Name",
            authors: "Authors",
            numberOfPages: "Number Of Pages",
            publisher: "Publisher",
            mediaType: "Media Type",
            characters: "Characters"
        }

        const bookDetailsData = Object.keys(booksLabelConfig).map((key) => {
            if(key === "authors" || key === "characters") {
                return {
                    label: booksLabelConfig[key],
                    value: bookDetails[key].map((item,i) =>{ 
                        return (
                            `${item}${bookDetails[key][i+1] ? ", " : ""}`
                        )
                    })
                }
            }
            return {
                label: booksLabelConfig[key],
                value: bookDetails[key] || "-"
            }
        })
        
        this.setState({bookDetailsData});
    }

    render(){
        const bookDetails = this.state.bookDetailsData;
        return (
            <React.Fragment>
                <h2>Book Details</h2>
                {
                    bookDetails.map((bookDetail, i) => {
                        return (
                            <div key={i}>
                                <span>{bookDetail.label}: </span>
                                <span>{bookDetail.value}</span>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default BookDetails;