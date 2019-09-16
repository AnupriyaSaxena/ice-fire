import React,{Component} from "react";
import GridCard from "../../components/GridCard/GridCard";
import cardApis from '../../apis/cardApis';
import {getFormattedDataWithID} from "../../helpers/helpers";

class Character extends Component {
    state = {
        characters: []
    }
    
    componentDidMount(){
    cardApis.get(`/characters`)
        .then(res => {
        const characters = res.data ? getFormattedDataWithID(res.data) : [];
        this.setState({ characters });
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2>Characters</h2>
                { this.state.characters.length>0 &&
                <GridCard cardType="Characters" cardsData={this.state.characters}></GridCard>
                }
            </React.Fragment>
        )
    }
}

export default Character; 