import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <div className="block-header google-sheets">
                <div className="google-sheets-download">
                    <a className="google-sheets-download" href={_.get(this.props, 'pageContext.frontmatter.download_link')} >
                    <button>
                        {_.get(this.props, 'pageContext.frontmatter.button_text')}
                        </button>
                    </a>
                </div>
                <iframe src={_.get(this.props, 'pageContext.frontmatter.iframe_url')} width={_.get(this.props, 'pageContext.frontmatter.iframe_width')} height={_.get(this.props, 'pageContext.frontmatter.iframe_height')} allowfullscreen="" frameborder="0">Loading…</iframe>
              </div>
            </Layout>
        );
    }
}
