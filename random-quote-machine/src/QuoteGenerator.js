import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const QuoteGenerator = (props) => {
    console.log('quote',props.text, props.author)
    return (
        <div clasaName='col align-self-center'>
            <blockquote id='text'>{props.text}</blockquote>
            <a href="twitter.com/intent/tweet" target="_blank" id='tweet-quote'><i className="fab fa-twitter-square" ></i></a>
            <button id='new-quote' onClick={props.getQuote} className="btn btn-primary">New Quote</button>
            <span id='author'>-{props.author}</span>
            <span className="bi bi-twitter"></span>
        </div>
    )
}

export default QuoteGenerator;