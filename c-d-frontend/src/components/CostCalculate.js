import React, {Component} from 'react';
import MakeRequest from './MakeRequest';
import DataCenter from './DataCenter';
import Cloud from './Cloud';

class CostCalcuate extends Component {
    constructor(){
        super();
        this.state ={
            
        }
    }

    render(){
        return(
            <div>
                <p>cost calculate</p>
                <DataCenter/>
                <Cloud/>
                
                <button>Make Req</button>
                <MakeRequest/>
            </div>
        )
    }
}
export default CostCalcuate;