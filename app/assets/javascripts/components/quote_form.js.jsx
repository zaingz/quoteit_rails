var QuoteForm = React.createClass({

    submitQuote: function(e){

        e.preventDefault();

        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.quote.getDOMNode().value.trim();
        if (this.props.current_user==null){
            swal("Can't Post", "Login first", "error")
            return false;
        }
        var user_id = this.props.current_user.id;
        var user = this.props.current_user;


        if (author.length >1 && text.length>1){
            this.props.onQuoteSubmit({author: author, text: text, user_id:user_id, user: user});
            this.refs.author.getDOMNode().value = '';
            this.refs.quote.getDOMNode().value = '';
        }else{
            console.log("please dont try to be smart");
            swal("Can't Post", "One of the field is empty", "error")
        }




    },

    render: function() {

        return (
            <div className='quoteForm row'>
                <h4> Post something amazing</h4>

                <form className="quoteForm" onSubmit={this.submitQuote}>
                    <div className="row">

                        <div className="six columns">
                            <label for="exampleMessage">Quote</label>
                            <textarea className="u-full-width" placeholder="Life is a mystry" ref="quote"></textarea>
                        </div>

                    </div>

                    <div className="row">
                        <div className="six columns">
                            <label for="exampleMessage">Author</label>
                    <input type="text"  className="u-full-width" placeholder="Shakspear" ref="author" />
                            </div>
                    </div>
                    <input className="quoteSubmit button-primary" type="submit" value="Post a Quote" />
                </form>













                        </div>

        );

    }
});
