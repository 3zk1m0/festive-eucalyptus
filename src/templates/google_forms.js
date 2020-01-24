import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <div className="block-header inner-small">
              <iframe src={_.get(this.props, 'pageContext.frontmatter.iframe_url')} width="100%" height={_.get(this.props, 'pageContext.frontmatter.iframe_height')} allowfullscreen="" frameborder="0">Loading…</iframe>
              </div>
            </Layout>
        );
    }
}
