import React, { Component } from 'react';
import './QuoteBox.css'
import QuoteGenerator from './QuoteGenerator';

export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '', author: '' }
        this.getQuote = this.getQuote.bind(this);
    }


    getQuote() {
   let randomQuote;
        fetch("https://type.fit/api/quotes")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                 randomQuote = data[Math.floor(Math.random() * 1650)]
                console.log('random', randomQuote.author)
                // text = randomQuote.text;
                // author = randomQuote.author;
            });
            console.log('fsafds', randomQuote)
        this.setState({ text: randomQuote.text, author: randomQuote.author })
        // console.log('quote', this.state.text, this.state.author)
    }
   

    render() {
        return (
            <div id='quote-box' style={{ backgroundColor: 'red', display: 'inline-block' }}>
                <QuoteGenerator getQuote={this.getQuote} author={this.state.author} text={this.state.text} />
            </div>
        )
    }
}