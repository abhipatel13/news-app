import React,{Component} from 'react';
import loader from './Spinner.gif'
export default class Spinner extends Component{
    render(){
        return(
            <div className='text-center'>
             
                <img src={loader} alt></img>
            </div>
        )
    }
}