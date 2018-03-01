import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SkinThumbnail extends Component {

    
    render() {
        return (
            <div className = "container">
                <div className = "row s4">
                    <div className="col s4">
                        <div className="z-depth-4"><img height="50" width="50" src="https://lh4.ggpht.com/AsBVCNaq3EYiSH6qHk12vicjtcJkH82dDgnbwmphiUupP0VgVHecPn4JFleX6rtgBuc=h310"/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkinThumbnail;