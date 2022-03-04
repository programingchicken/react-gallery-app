import React, { Component } from 'react';
import PageNotFound from './NotFound';


class Gallery extends Component {

    render() {
        //loads the objects into arrays
        const newIdArray = this.props.data.map(element => element.id);
        const newFarmArray = this.props.data.map(element => element.farm);
        const newServerArray = this.props.data.map(element => element.server);
        const newSecretArray = this.props.data.map(element => element.secret);
        console.log(newIdArray)
        console.log(newFarmArray)
        console.log(newServerArray)
        console.log(newSecretArray)
        console.log(this.props.text)
        console.log(this.props.data)
        if (newIdArray.length === 16) {
            return (
                <div className="photo-container">
                    <h2>Results</h2>
                    <ul>
                        <li>
                            <img src={`https://farm${newFarmArray[0]}.staticflickr.com/${newServerArray[0]}/${newIdArray[0]}_${newSecretArray[0]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[1]}.staticflickr.com/${newServerArray[1]}/${newIdArray[1]}_${newSecretArray[1]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[2]}.staticflickr.com/${newServerArray[2]}/${newIdArray[2]}_${newSecretArray[2]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[3]}.staticflickr.com/${newServerArray[3]}/${newIdArray[3]}_${newSecretArray[3]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[4]}.staticflickr.com/${newServerArray[4]}/${newIdArray[4]}_${newSecretArray[4]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[5]}.staticflickr.com/${newServerArray[5]}/${newIdArray[5]}_${newSecretArray[5]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[6]}.staticflickr.com/${newServerArray[6]}/${newIdArray[6]}_${newSecretArray[6]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[7]}.staticflickr.com/${newServerArray[7]}/${newIdArray[7]}_${newSecretArray[7]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[8]}.staticflickr.com/${newServerArray[8]}/${newIdArray[8]}_${newSecretArray[8]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[9]}.staticflickr.com/${newServerArray[9]}/${newIdArray[9]}_${newSecretArray[9]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[10]}.staticflickr.com/${newServerArray[10]}/${newIdArray[10]}_${newSecretArray[10]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[11]}.staticflickr.com/${newServerArray[11]}/${newIdArray[11]}_${newSecretArray[11]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[12]}.staticflickr.com/${newServerArray[12]}/${newIdArray[12]}_${newSecretArray[12]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[13]}.staticflickr.com/${newServerArray[13]}/${newIdArray[13]}_${newSecretArray[13]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[14]}.staticflickr.com/${newServerArray[14]}/${newIdArray[14]}_${newSecretArray[14]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[15]}.staticflickr.com/${newServerArray[15]}/${newIdArray[15]}_${newSecretArray[15]}_n.jpg`} alt="" />
                        </li>
                        <li>
                            <img src={`https://farm${newFarmArray[16]}.staticflickr.com/${newServerArray[16]}/${newIdArray[16]}_${newSecretArray[16]}_n.jpg`} alt="" />
                        </li>
                    </ul>
                </div>
            );

        } else {
            return (
                <div className="photo-container">
                <PageNotFound />
                </div>
            )
        }
    }
}




export default Gallery;