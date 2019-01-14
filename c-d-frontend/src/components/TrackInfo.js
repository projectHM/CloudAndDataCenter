import React, { Component } from 'react';

class TrackInfo extends Component{
 constructor(){
     super();


 }
 render(){
    return(
      <div className="modal">
        <form className="form"onSubmit>
          

          <label>Information</label><input type="text" value name="Info" onChange/><br/>

        
          <button onClick={}> Edit </button>
          <button onClick={}> Delete </button>
        </form>
      </div>
    )
  }

}
export default TrackInfo;