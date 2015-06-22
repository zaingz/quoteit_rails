var Quote = React.createClass({

    handelDelete: function(e){
            e.preventDefault();
            var ide = this.props.id;
        console.log("Deleted "+ ide);
            $.ajax({
                url: "/quotes/"+this.props.id,
                dataType: 'json',
                type: 'DELETE',
                success: function(data) {
                   // this.props.load;
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
    },
    render: function () {
        return (
            <div className="quote" onClick={this.handler}>
                <span> {this.props.user.email}</span>
                <h3 className="quote_text">
                    {this.props.text}
                </h3>
                   Author: {this.props.author}

                <button  onClick={this.handelDelete}>Delete</button>
                <hr/>
            </div>
        );
    }
});

var QuoteList = React.createClass({


    render: function () {
        var load= this.props.load;
        var quoteNodes = this.props.quotes.map(function (quote, index) {
            return (
                <Quote load={load} id={quote.id} author={quote.author} text={quote.text} user={quote.user} key={index} />
            );
        });

        return (
            <div className="quoteList">
                {quoteNodes}
            </div>
        );
    }
});



var QuoteBox = React.createClass({
    getInitialState: function () {
        return {quotes: []};
    },
    componentDidMount: function () {
        this.loadQuotesFromServer();
    },
    loadQuotesFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (quotes) {
                this.setState({quotes: quotes});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log('error');
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleQuoteSubmit: function(quote) {
        var quotes = this.state.quotes;
        var newQuote = quotes.concat([quote]);
        this.setState({quotes: newQuote});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: {"quote": quote},
            success: function(data) {
                this.loadQuotesFromServer;
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {

        return (
            <div className="quoteBox">
                <h1>Quotes</h1>
                <QuoteForm onQuoteSubmit={this.handleQuoteSubmit} user={this.props.current_user}/>

                <QuoteList quotes={this.state.quotes} load={this.loadQuotesFromServer}/>

            </div>
        );
    }
});

var QuoteForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.quote.getDOMNode().value.trim();
        var user = this.props.user
        this.props.onQuoteSubmit({author: author, text: text, user:user,  user_id: user.id});
        this.refs.author.getDOMNode().value = '';
        this.refs.quote.getDOMNode().value = '';
        return false;
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="author" ref="author" />
                <input type="text" placeholder="Say something nice..." ref="quote" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

/*
var ready = function () {
    React.render(
        <QuoteBox url="/quotes.json" />
        //document.getElementById('quotes')
    );
};

$(document).ready(ready);*/