
var Quote = React.createClass({
    delete: function(){
      this.props.onQuoteDelete({id: this.props.quote.id});
        console.log('fired');
    },
    render: function(){
        var delBtn;

        if (this.props.quote!=null && this.props.current_user!=null)
        if (this.props.quote.user.id === this.props.current_user){
            delBtn = (
                <button className="u-pull-right" onClick={this.delete}>Delete</button>
            );

        }
        return (

            <div className="quote">
                <h4>{this.props.quote.user.name} </h4>
                <h2>{this.props.quote.text}</h2>
                <span>{this.props.quote.author}</span>
                {delBtn}
                <hr/>
            </div>

        );
    }
});
