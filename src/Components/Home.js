import React from "react";
import Header from './Header';

export default class Home extends React.Component{
   
    render()
    {
        return (
            <>
                <Header props={this.props} />
                <div>
                    Welcome to our Comedian GP
                </div>
            </>
        )
    }
}
          

      

