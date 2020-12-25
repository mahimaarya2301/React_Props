//Import area
import React,{Component} from 'react';//Named Import
import './a.css';
//Let's Create a Class Component
//Component Defination
class A extends Component{
    //1.Property

    //2.Constructor
    constructor(){
        super();//Call Parent Constructor
    }

    //3.Method
    //Every Class Component must have a render method which returns html
    render(){
        return (
            <React.Fragment>
                <h1 className="a">Hello Mahima</h1>
                <h1>Hello {this.props.name}</h1>
            </React.Fragment>
        )
    }
}
export default A;//Default export