/* Define a template that lets us configure the ft-connect-wizard */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-label/iron-label.js';

import 'ft-document-panel/ft-document-panel.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
        <style>
            /* Styling for this component itself */
            :host {
                display: block;
            }

            /* Style configuration for sub-components */
            :host > * {
                /* None*/
            }
        </style>

        <iron-label>
            iron-label
        </iron-label>

        <ft-document-panel id="panel">

        </ft-document-panel>
`,

  is: 'ft-test',

  properties: {
  },

  ready: function()
  {
      this._loadFakeDocuments();
  },

  _loadFakeDocuments: function()
  {
      // var documents = "[\n" +
      //     "    {\n" +
      //     "        \"accountId\": \"1\",\n" +
      //     "        \"connectionId\": \"4567\",\n" +
      //     "        \"actionDate\": \"2012-03-15T01:05:34+00:00\",\n" +
      //     "        \"addedDate\": \"2017-03-20T01:05:14+00:00\",\n" +
      //     "        \"createdDate\": \"2012-03-15T01:05:14+00:00\",\n" +
      //     "        \"deliveredDate\": \"2012-03-15T01:05:14+00:00\",\n" +
      //     "        \"relevantDate\": \"2012-12-18T01:05:14+00:00\",\n" +
      //     "        \"deliveryState\": \"done\",\n" +
      //     "        \"id\": \"1\",\n" +
      //     "        \"name\": \"Amazon Orders 2012-12-18 4.pdf\",\n" +
      //     "        \"pageCount\": \"32\",\n" +
      //     "        \"size\": \"590487\"\n" +
      //     "        \"thumbnailUrl\": \"https://www.gettyimages.com/license/898736012\"\n" +
      //     "    }\n" +
      //     "]";
      // this.$.panel.documents = JSON.parse(documents);
  }
})
