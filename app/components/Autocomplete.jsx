import React from 'react';
import {connect} from 'react-algoliasearch-helper';

const Autocomplete = React.createClass({
  handleSelect: function(email){
    this.props.onAutocompleteSelect(email);
  },
  render: function() {
    var {results, recipientTagID} = this.props;

    var showResults = () => {
      var hits = results.hits;
      hits.splice(5);
      return hits.map((hit)=>{
        return (
            <li className="autocomplete-entry"
              key={hit.objectID}
              onClick={() => this.handleSelect(hit.email)}>
              {hit.name}
            </li>
        );
      });
    };
    if (!results)
      return <div></div>;
    return (
      <div className="autocomplete-box columns small-centered small-11 medium-8 large-6">
        <ul>
          {showResults()}
        </ul>
      </div>
    );
  }
});
export default connect(state => ({results: state.searchResults})
)(Autocomplete);
