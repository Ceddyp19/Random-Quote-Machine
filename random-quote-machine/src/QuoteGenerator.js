import React, { Component } from 'react';

const QuoteGenerator = (props) => {
    console.log('quote',props.text, props.author)
    return (
        <div>
            <blockquote id='text'>{props.text}</blockquote>
            <span id='author'>{props.author}</span>
            <button id='new-quote' onClick={props.getQuote}>New Quote</button>
            <a href='#' id='tweet-quote'>Tweet</a>
        </div>
    )
}

export default QuoteGenerator;