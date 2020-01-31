import React from 'react'

import './index.scss'

class RadioButton extends React.Component{
    componentDidMount(){
        this.props.input.onChange(null)
    }
    changeSelected = (e) => {
        console.log(e.target.value)
        this.props.input.onChange(e.target.value)
    }
    render(){
        return(<div className="radio-button__container">
            <div className="radio-button__label">{this.props.label}</div>
            <div className="radio-button__radios">
                {this.props.content.map((element, index) => 
                    <span key={index}>
                        <label className="radio-button__radio-label">{element.label}</label>
                        <input type="radio" name="radio" value={element.title} onClick={this.changeSelected}/>
                    </span>
                )}
            </div>
        </div>)
    }
}

export default RadioButton