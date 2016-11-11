// react
import React from 'react';
import ReactDOM from 'react-dom';

// components
import Contact from 'Contact';
import ContactForm from 'ContactForm';
// foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// custom style
require('style!css!appStyle');

// algoliasearch
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import {Provider} from 'react-algoliasearch-helper';

var applicationId = 'X4CZOFIPYI';
var apiKey = 'c9d74d1b249831a64803caffb37a4e40';
var algoliaIndex = 'ideals-people-energy';

var client = algoliasearch(applicationId, apiKey);
var helper = algoliasearchHelper(client, algoliaIndex);

var index = client.initIndex(algoliaIndex);
index.search('', function searchDone(err, content) {
  console.log(err, content);
});
// react dom render
ReactDOM.render(
  <Provider helper={helper}>
    <Contact/>
  </Provider>,
  document.getElementById('app')
);
