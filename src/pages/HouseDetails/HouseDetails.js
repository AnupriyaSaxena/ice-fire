import React,{Component} from "react";
import cardApis from '../../apis/cardApis';

class HouseDetails extends Component { 
    state = {
        houseDetailsData: []
    }
    
    componentDidMount(){
        const houseId= this.props.match.params.id;
        debugger;
        cardApis.get(`houses/${houseId}`)
        .then(res => {
            const houseDetails = res.data;
            this.setDetailsData(houseDetails);            
        })
    }

    setDetailsData = (houseDetails) => {
        const housesLabelConfig = {
            name: "Name",
            region: "Region",
            words: "Words",
            seats: "Seats",
            coatOfArms: "Coat of arms",
        }

        const houseDetailsData = Object.keys(housesLabelConfig).map((key) => {
            if(key === "seats") {
                debugger;
                return {
                    label: housesLabelConfig[key],
                    value: houseDetails[key][0] ? houseDetails[key].map((item,i) =>{ 
                        return (
                            `${item}${houseDetails[key][i+1] ? ", " : ""}`
                        )
                    }) : "Not available"
                }
            }
            return {
                label: housesLabelConfig[key],
                value: houseDetails[key] || "Not available"
            }
        })
        
        this.setState({houseDetailsData});
    }

    render(){
        const houseDetails = this.state.houseDetailsData;
        return (
            <React.Fragment>
                <h2>House Details</h2>
                {
                    houseDetails.map((houseDetail, i) => {
                        return (
                            <div key={i}>
                                <span>{houseDetail.label}: </span>
                                <span>{houseDetail.value}</span>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default HouseDetails;