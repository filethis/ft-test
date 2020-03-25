/* Load any needed Web Components polyfills from the FileThis CDN */
/*<script src="./bower_components/webcomponentsjs/custom-elements-es5-adapter.js"></script>*/
/*<script src="https://connect.filethis.com/webcomponents/webcomponentsjs/1.0.0/custom-elements-es5-adapter.js"></script>*/
/*<script type="text/javascript">*/
/*if (window.customElements) {*/
/*document.write('<scr' + 'ipt type="text/javascript" src="https://connect.filethis.com/webcomponents/webcomponentsjs/1.0.0/custom-elements-es5-adapter.js"></scr' + 'ipt>');*/
/*}*/
/*</script>*/
/**<script src="https://unpkg.com/polymer-build@2.1.1/lib/babel-helpers.min.js"></script>*/
/*<script src="https://connect.filethis.com/webcomponents/webcomponentsjs/1.0.0/webcomponents-loader.js"></script>*/
/* Imports */
/*<link rel="import" href="https://connect.filethis.com/ft-connect-wizard/2.0.8/ft-connect-wizard.html">*/
/*<link rel="import" href="./bower_components/ft-connect-wizard/ft-connect-wizard.html">*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import './src/ft-test.js';

import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<style>
        html, body {
            height: 100%;
            margin: 0;
        }
    </style><ft-test id="wizard" style="width: 800px; height: 500px; margin: 20px; border: 1px solid black; box-shadow: 5px 5px 4px #BBB; ">
    </ft-test>`;

document.head.appendChild($_documentContainer.content);
var link = document.createElement('link');
link.setAttribute('rel', 'import');
link.setAttribute('href', './src/ft-test.html');
document.getElementsByTagName('head')[0].appendChild(link);
