export function getFormattedDataWithID(data){
    let formattedData = data.map((item, i) => {
        const newHouse={...item, id:i+1};
        return newHouse;
        }
    )
    return formattedData;
}