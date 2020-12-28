import React from 'react';
import './QuoteBox.css'
import QuoteGenerator from './QuoteGenerator';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            author: '',
            quotes: []
        }
        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount = () => {
        fetch("https://type.fit/api/quotes")
            .then(resp => resp.json())
            .then(quotes => {
                let randomQuote = quotes[Math.floor(Math.random() * 1644)]
                this.setState({
                    quotes,
                    author: randomQuote.author,
                    text: randomQuote.text
                })
            })
    }


    getQuote() {
        let quotes = this.state.quotes
        let randomQuote = quotes[Math.floor(Math.random() * 1644)]
        this.setState({
            author: randomQuote.author,
            text: randomQuote.text
        })
    }


    render() {
        return (
            <div id='quote-box' className="col-md-12">
                <QuoteGenerator getQuote={this.getQuote} author={this.state.author} text={this.state.text} />
            </div>
        )
    }
}

// style={{ backgroundColor: 'red', display: 'inline-block' }}