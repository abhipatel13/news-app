import React,{Component} from 'react';
export default class Footer extends Component{
    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
             fontSize:"17px",
            fontFamily: "Arial",
            position:"absolute",
            width:"100%",
            
            marginTop:"-1%"
          }
        return(
            <div className='text-center'>
             <footer style={mystyle}>
                 <p style={{marginTop:"12px"}}>Copyright Made By Abhi</p>
             </footer>
            </div>
        )
    }
}