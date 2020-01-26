import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <div className="block-header google-sheets">
                <form className="google-sheets-download" action={_.get(this.props, 'pageContext.frontmatter.donwload_link')}>
                    <button type="submit">{_.get(this.props, 'pageContext.frontmatter.button_text')}</button>
                </form>  
                <iframe src={_.get(this.props, 'pageContext.frontmatter.iframe_url')} width={_.get(this.props, 'pageContext.frontmatter.iframe_width')} height={_.get(this.props, 'pageContext.frontmatter.iframe_height')} allowfullscreen="" frameborder="0">Loading…</iframe>
              </div>
            </Layout>
        );
    }
}
/*
{_.map(recent_posts, (post, post_idx) => (
    <article key={post_idx} className="post post-card">
      <div className="post-card-inside">
        {_.get(post, 'frontmatter.thumb_img_path') && 
        <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
          <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
        </Link>
        }
        <div className="post-card-content">
          <header className="post-header">
            <h3 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
            <h4 className="post-subtitle"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.speaker')}</Link></h4>
          </header>
          <div className="post-excerpt">
            <p>{_.get(post, 'frontmatter.excerpt')}</p>
          </div>
          <footer className="post-meta">
            <a  className="post-card-company-link"  href={_.get(post, 'frontmatter.company_url')}>
              <img src={safePrefix(_.get(post, 'frontmatter.company_logo'))} alt={_.get(post, 'frontmatter.company')} />
            </a>
          </footer>
        </div>
      </div>
    </article>
    ))}*/