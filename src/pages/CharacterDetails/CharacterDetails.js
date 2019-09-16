import React,{Component} from "react";
import cardApis from '../../apis/cardApis';

class CharacterDetails extends Component { 
    state = {
        characterDetailsData: []
    }
    
    componentDidMount(){
        const characterId= this.props.match.params.id;
        debugger;
        cardApis.get(`characters/${characterId}`)
        .then(res => {
            const characterDetails = res.data;
            this.setDetailsData(characterDetails);            
        })
    }

    setDetailsData = (characterDetails) => {
        const charactersLabelConfig = {
            name: "Name",
            culture: "Culture",
            aliases: "Aliases",
        }

        const characterDetailsData = Object.keys(charactersLabelConfig).map((key) => {
            if(key === "aliases") {
                debugger;
                return {
                    label: charactersLabelConfig[key],
                    value: characterDetails[key][0] ? characterDetails[key].map((item,i) =>{ 
                        return (
                            `${item}${characterDetails[key][i+1] ? ", " : ""}`
                        )
                    }) : "Not available"
                }
            }
            return {
                label: charactersLabelConfig[key],
                value: characterDetails[key] || "Not available"
            }
        })
        
        this.setState({characterDetailsData});
    }

    render(){
        const characterDetails = this.state.characterDetailsData;
        return (
            <React.Fragment>
                <h2>Character Details</h2>
                {
                    characterDetails.map((characterDetail, i) => {
                        return (
                            <div key={i}>
                                <span>{characterDetail.label}: </span>
                                <span>{characterDetail.value}</span>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default CharacterDetails;