var UserInfo = React.createClass({



    render: function(){
        var ps;
        if (this.props.user == null) {
            ps = (
                <div>
                    Your are not Logged in!
                    <a href="http://localhost:3000/users/auth/facebook">Login through FB</a>
                    OR
                    <a href="http://localhost:3000/users/auth/twitter">Login through TW</a>
                </div>
            );
        }else{
            ps = (
               <div>Welcome: {this.props.user.email}</div>
            );
        }
        return (
            <div>{ps}</div>
        );
    }


});