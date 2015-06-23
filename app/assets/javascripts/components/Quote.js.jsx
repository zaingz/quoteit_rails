
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
        var imgUrl;
        if (this.props.quote.user.identity.provider==="facebook")
            imgUrl= "https://graph.facebook.com/"+this.props.quote.user.identity.uid+"/picture?width=800";
        else if (this.props.quote.user.identity.provider==="twitter")
            imgUrl= "https://twitter.com/"+this.props.quote.user.name+"/profile_image?size=original"

        return (

            <div className="quote">
                <div className="row"> <img className="img-circle" src={imgUrl}/><span className="userName">{this.props.quote.user.name} </span></div>
                <h2 className="quoteText">{this.props.quote.text}</h2>
                <span className="quoteAuthor">-{this.props.quote.author}</span>
                {delBtn}
                <hr/>
            </div>

        );
    }
});
