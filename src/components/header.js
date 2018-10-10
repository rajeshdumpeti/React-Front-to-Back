import React, {Component} from 'react';


class Header extends Component {
    constructor(){
        super();
        this.state = { };
    }

    render(){
        return (
       <header>
            <div className="row header">
              <div className="col-lg-2 col-md-2 col-xs-5">
                 <a target="_blank" href="https://github.com/rajeshdumpeti/react-front-to-back" className
                 ="Header-text_size"><strong>GitHub</strong></a>
              </div>
              <div className="col-lg-8 col-md-7">
                 <h4 className="title"><strong>Fetching Api's from Youtube Search Api using React.Js</strong></h4>
              </div>
              <div className="col-lg-2 col-md-3 col-xs-7">
                 <a target="_blank" href="https://developers.google.com/youtube/v3/docs/search/list" className="Header-text_size"><strong>Need Help?</strong></a>
              </div>
             </div>
        </header>
        );
    }
};


export default Header;