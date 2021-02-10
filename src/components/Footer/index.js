import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let style={
            textAlign:'center',

        }

        return(
            <>
            <h1 style={style}>{this.props.statusDisplay!==""?"":`Player ${this.props.turn}'s turn`}</h1>
            <h1 style={style}>{this.props.statusDisplay}</h1>
            <div style={style}>{this.props.statusDisplay!==""?<button  onClick={()=>this.props.gameRestart()}>Game Reset</button>:""}</div>
            </>
        );
    }

}

export default Footer;