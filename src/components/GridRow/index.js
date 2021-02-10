import React from 'react'
import GridItem from '../GridItem'
import './gridRow.css'
class GridRow extends React.Component{
 constructor(props){
     super(props);
 }
    render(){
        // let  gridRow=[<GridItem/>,<GridItem/>,<GridItem/>];
        return(
            <div className="row">
             {this.props.row.map((col,colIndex)=>(
               <GridItem rowIndex={this.props.rowIndex} col={col} colIndex={colIndex} handlePlayerClick={this.props.handlePlayerClick}/>
             ))}
                 {/* {gridRow} */}
             </div>
        );
    }

}

export default GridRow;