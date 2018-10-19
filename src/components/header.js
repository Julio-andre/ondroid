import React,{ Component } from 'react';
import '../css/styles.css';

class Header extends Component {

    state = {
        keywords: ''
    }

    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

render(){

    return (
            <header>
                <div className="logo">Logo</div>
                <input 
                    type="text" 
                    onChange={this.inputChange}
                />
            </header>
        )
    } 
}

export default Header;