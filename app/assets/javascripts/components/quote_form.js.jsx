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
            <div className='quoteForm'>
                <h4> Post something amazing</h4>
                <form className="quoteForm" onSubmit={this.submitQuote}>
                    <input type="text" placeholder="Say something nice..." ref="quote" />
                    <input type="text" placeholder="author" ref="author" />
                    <input type="submit" value="Post a Quote" />
                </form>
            </div>

        );

    }
});
