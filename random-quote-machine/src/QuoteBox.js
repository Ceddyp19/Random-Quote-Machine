import React, { Component } from 'react';
import './QuoteBox.css'
import QuoteGenerator from './QuoteGenerator';

export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state={quote: '', author: ''}
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        console.log('it works')
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

render(){
    return (
        <div id='quote-box' style={{ backgroundColor: 'red', display: 'inline-block' }}>
            <QuoteGenerator getQuote={this.getQuote} author={this.state.author} text={this.state.text}/>
        </div>
    )
}
}