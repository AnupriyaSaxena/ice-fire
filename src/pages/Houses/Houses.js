import React,{Component} from "react";
import GridCard from "../../components/GridCard/GridCard";
import cardApis from '../../apis/cardApis';
import {getFormattedDataWithID} from "../../helpers/helpers";

class Houses extends Component {
    state = {
        houses: []
    }
    
    componentDidMount(){
    cardApis.get(`/houses`)
        .then(res => {
            const houses = res.data ? getFormattedDataWithID(res.data) : [];
            this.setState({ houses });
        })
        .catch((e) => {
            console.error(e.message);
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2>Houses</h2>
                { this.state.houses.length>0 &&
                <GridCard cardType="Houses" cardsData={this.state.houses}></GridCard>
                }
            </React.Fragment>
        )
    }
}

export default Houses; 