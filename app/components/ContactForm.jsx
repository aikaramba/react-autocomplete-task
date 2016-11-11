import React from 'react';
import Autocomplete from 'Autocomplete';
// Presentation

const ContactForm = React.createClass({
  onChange: function(){
    var recipient = this.refs.recipient.value;
    this.props.onChange(recipient);
  },
  onSubmit: function(e){
    e.preventDefault();
    this.props.onSubmit(this.refs.recipient.value, this.refs.message.value);
  },
  handleAutocompleSelect: function(email){
    this.refs.recipient.value = email;
    this.onChange();
  },
  render: function (){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} placeholder="Enter recipient's username or email" ref="recipient"/>
          {this.props.showAutocomplete ?
            <Autocomplete onAutocompleteSelect={this.handleAutocompleSelect} /> :
              <div/>}
          <textarea rows="10" cols="50" placeholder="Your message here" ref="message"></textarea>
          <input type="submit" value="Send" className="button primary float-right"/>
        </form>
      </div>
    );
  }
});
module.exports = ContactForm;
