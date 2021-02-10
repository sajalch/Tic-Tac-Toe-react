import React from 'react'
import './gridItem.css'
class GridItem extends React.Component{

    constructor(props){
        super(props);
        // this.state={
        //     counter:0,
        // }
        // this.handleClick.bind(this); // as we are using arrow function
    }
    
    render(){
        // console.log("clicked",this.state.counter)
        // console.log(this.props.rowIndex,this.props.colIndex)
        return(
            
            <div className="cell" 
            onClick={()=>this.props.handlePlayerClick(this.props.rowIndex,this.props.colIndex)}
             children={this.props.col}/>
        );
    }

}

export default GridItem;