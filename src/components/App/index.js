import React,{Component} from 'react'
import './App.css';
import GridRow from '../GridRow'
import Header from '../Header'
import Footer from '../Footer'
class App extends Component{
    constructor(){
        super();
        this.state={
          gameState:[
            ["","",""],
            ["","",""],
            ["","",""]
          ],
          playerTurn:"X",
          gameActive:true,
          winningConditions:[
            [[0,0],[0,1],[0,2]],
            [[1,0],[1,1],[1,2]],
            [[2,0],[2,1],[2,2]],
            [[0,0],[1,0],[2,0]],
            [[0,1],[1,1],[2,1]],
            [[0,2],[1,2],[2,2]],
            [[0,0],[1,1],[2,2]],
            [[0,2],[1,1],[2,0]],
        ],
        statusDisplay:"",
        };
    }
    handleResultValidation=()=>{
      let roundWon=false;
      //check for each winning condition
      for(let i=0;i<this.state.winningConditions.length;i++){
          const winningCondition=this.state.winningConditions[i];//[0,1,2];
          const copyGameState=[...this.state.gameState]
          let a=copyGameState[winningCondition[0][0]][winningCondition[0][1]];
          let b=copyGameState[winningCondition[1][0]][winningCondition[1][1]];
          let c=copyGameState[winningCondition[2][0]][winningCondition[2][1]];
          // console.log(typeof(a),b,c);
          if(a==="" || b==="" || c===""){
              continue;
          }
          if(a==b && b==c){
              roundWon=true;
              break;
          }
      }
      //player won?
          if(roundWon){
            this.setState({
              statusDisplay:`Player ${this.state.playerTurn} is Winner`,
              gameActive:false,
            })
            return;
          }
  
          //for draw
          let roundDraw=!this.state.gameState[0].includes("")&&!this.state.gameState[1].includes("")&&!this.state.gameState[2].includes("");
          if(roundDraw){
            this.setState({
              statusDisplay:"Game Draw",
              gameActive:false,
            })
            return;
          }
   
  }

    handlePlayerClick=(rowIndex,colIndex)=>{
      //In react js we never mutate values by reference
      if(!this.state.gameActive) return;
      const copiedGameState=[...this.state.gameState];
      if(copiedGameState[rowIndex][colIndex]!=="")
        return;
      //make changes then assign the copy to the gamestate
      copiedGameState[rowIndex][colIndex]=this.state.playerTurn;

      this.handleResultValidation();
      this.setState({
        gameState: copiedGameState,
        playerTurn:this.state.playerTurn==="X"?"O":"X",
      });
      
  };
  gameRestart=()=>{
    this.setState({
      gameState:[
        ["","",""],
        ["","",""],
        ["","",""]
      ],
      playerTurn:"X",
      gameActive:true,
      statusDisplay:"",
    });
  }
    render(){
      // let  gridRows=[<GridRow/>,<GridRow/>,<GridRow/>];{/* {gridRows} */}
        return (
          <>
           <Header/>
           <div className="game--container">
             {this.state.gameState.map((row,rowIndex)=>(
               <GridRow row={row} rowIndex={rowIndex} handlePlayerClick={this.handlePlayerClick}/>
             ))}
             {/* {gridRows} */}
           </div>
           <Footer turn={this.state.playerTurn} statusDisplay={this.state.statusDisplay} gameRestart={this.gameRestart}/>
          </>
        );
    }
}

export default App; 
// import './App.css';

// function App() {
//   return (
//     <>
//     <h1 children={"hello"}/>
//     <h1 children={"hello"}/>
//     <h1 children={"hello"}/>
//     </>
//   );
// }

// export default App;
