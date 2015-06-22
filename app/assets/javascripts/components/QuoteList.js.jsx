
var QuoteList = React.createClass({

    render: function(){
        var del = this.props.onQuoteDelete
        var quotes = this.props.quotes;
        quotes.sort(function(a, b) {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        var id;
        if (this.props.current_user!=null) {
            id = this.props.current_user.id;

        }
        var quoteNode = quotes.map(function (quote, index) {
            return (
                <Quote quote={quote} onQuoteDelete={del} current_user={id} key={index}  />
            );
        });


        return (

            <div className="quoteList">

                    {quoteNode}

            </div>


        );
    }
});
