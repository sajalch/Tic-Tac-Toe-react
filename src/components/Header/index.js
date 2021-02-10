import React from 'react'

class Header extends React.Component{
    render(){
        let style={
            textAlign:'center',
        }

        return(
            <h1 style={style}>Tic Tac Toe</h1>
        );
    }

}

export default Header;