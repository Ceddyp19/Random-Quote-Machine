import React, { Component } from 'react';

const QuoteGenerator = (props) => {
    return (
        <div>
            <blockquote id='text'> Quote goes here</blockquote>
            <span id='author'>Author goes here</span>
            <button id='new-quote' onClick={props.getQuote}>New Quote</button>
            <a href='#' id='tweet-quote'>Tweet</a>
        </div>
    )
}

export default QuoteGenerator;