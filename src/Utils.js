
const formatData = result => {
    const randomNumb = Math.round(Math.random());
    let finalData = {
            resp: result,
            expected: result,
            is_passed: "Yes"
        }

    if(randomNumb === 1){
        let numb2 = Math.random() * 4000;
        numb2 = Math.ceil(numb2);
        finalData = {...finalData, resp: numb2, is_passed: "No"}
    }
    return finalData;
}

export default formatData;
