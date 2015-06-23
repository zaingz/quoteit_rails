var UserInfo = React.createClass({



    render: function(){
        var ps;
        if (this.props.user == null) {
            ps = (

                <div className="container nav">
                    <div className="u-pull-right">
                    <span>Your are not Logged in! </span>
                    <a href="https://quoteit-zaingz.herokuapp.com/users/auth/facebook"> Login through FB </a>
                    OR
                    <a href="https://quoteit-zaingz.herokuapp.com/users/auth/twitter"> Login through TW </a>
                        </div>
                </div>
            );
        }else{
            ps = (
               <div className="container nav"> <h6 className="u-pull-right">Welcome: {this.props.user.email}</h6></div>
            );
        }
        return (
            <div className="row">{ps}</div>
        );
    }


});