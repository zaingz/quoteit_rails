var UserInfo = React.createClass({



    render: function(){
        var ps;
        if (this.props.user == null) {
            ps = (
                <div className="container nav">
                    <span>Your are not Logged in!</span>
                    <a href="http://localhost:3000/users/auth/facebook">Login through FB</a>
                    OR
                    <a href="http://localhost:3000/users/auth/twitter">Login through TW</a>
                </div>
            );
        }else{
            ps = (
               <div className="container"> <h6 className="u-pull-right">Welcome: {this.props.user.email}</h6></div>
            );
        }
        return (
            <div>{ps}</div>
        );
    }


});