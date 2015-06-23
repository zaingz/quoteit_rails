
var QuoteBox = React.createClass({

    getInitialState: function () {
        return {quotes: []};
    },
    componentDidMount: function () {
        this.fetchQuotes();

    },
    fetchQuotes: function () {
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

    deleteQuote: function(quote) {
        $.ajax({
            url: "/quotes/"+quote.id,
            dataType: 'json',
            type: 'DELETE',
            success: function(data) {
                this.fetchQuotes();
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

    },
    postQuote: function(quote){
      console.log('Quote is posted Yahoo!');
       /* var quotes = this.state.quotes;
        var newQuote = quotes.concat([quote]);
        this.setState({quotes: newQuote});*/
        $.ajax({
            url:"/quotes",
            //dataType: 'json',
            type: 'POST',
            data: {"quote": quote},
            success: function(data) {
                this.fetchQuotes();
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function(){

      return (

        <div className="quoteBox container">


            <QuoteList quotes={this.state.quotes} current_user={this.props.user} onQuoteDelete={this.deleteQuote}/>

            <QuoteForm onQuoteSubmit={this.postQuote} current_user={this.props.user}/>
        </div>
      );
    }
});
