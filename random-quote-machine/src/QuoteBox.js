import React from 'react';
import './QuoteBox.css'
import QuoteGenerator from './QuoteGenerator';

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

        // var randomQuote = {};
        // fetch("https://type.fit/api/quotes")
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (data) {
        //         // console.log(data);
        //         randomQuote = data[Math.floor(Math.random() * 1644)]
        //         console.log('random', randomQuote.author)
        //         this.state.text = randomQuote.text;
        //         this.state.author = randomQuote.author;
        //     });
        // console.log(this.state.quotes)
        // this.setState({ text: randomQuote.text, author: randomQuote.author })
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