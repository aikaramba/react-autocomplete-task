import React from 'react';
import {connect} from 'react-algoliasearch-helper';

import ContactForm  from 'ContactForm';

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

const Contact = React.createClass({
  getInitialState: function(){
    return {
      recipient: '',
      message: '',
      showAutocomplete: false
    };
  },
  handleSubmit: function(recipient, message){
    var {helper} = this.props;

    if(emailRegex.test(recipient)){
      $.post("http://example.org/", {
          data: JSON.stringify({email:recipient, body:message})
      });
    }
  },
  componentWillMount: function() {
  },
  componentDidMount: function(){
  },
  handleChange: function(text) {
    var {helper} = this.props;
    helper.setQuery(text).search();

    this.setState({
      showAutocomplete: text.length > 3 && !emailRegex.test(text)
    });
  },
  render: function(){
    return(
      <div className="row">
        <div className="columns small-centered small-11 medium-8 large-6">
          <h2 className = "page-title">Contact us</h2>
          <ContactForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            showAutocomplete={this.state.showAutocomplete}/>
        </div>
      </div>
    );
  }
});
export default connect(state => ({results: state.searchResults})
)(Contact);
