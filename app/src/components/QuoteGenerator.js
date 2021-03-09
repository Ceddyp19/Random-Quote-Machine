import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const QuoteGenerator = (props) => {
    console.log('quote',props.text, props.author)
    return (
        <div>
            <blockquote id='text'>{props.text}</blockquote>
            <p id='author'>-{props.author}</p>
            <a href="twitter.com/intent/tweet" target="_blank" id='tweet-quote'><i className="fab fa-twitter-square fa-3x" ></i></a>
            <button id='new-quote' onClick={props.getQuote} className="btn btn-primary">New Quote</button>
        </div>
    )
}

export default QuoteGenerator;