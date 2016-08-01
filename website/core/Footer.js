/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Footer
 */

var React = require('React');

function getVersionedGitHubPath(path) {
  return [
    'https://github.com/facebook/react-native/blob/master',
    path
  ].join('/');
}

var Footer = React.createClass({
  render: function() {
    return (
      <p className="edit-page-block">
        You can <a target="_blank" href={getVersionedGitHubPath(this.props.path)} >edit this page on GitHub</a> and send us a pull request!
      </p>
    );
  }
});

module.exports = Footer;