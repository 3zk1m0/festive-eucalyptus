import React from 'react';
import _ from 'lodash';

import {safePrefix, htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionKeynote extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block pricing-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(this.props, 'section.title') && 
                <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                }
                {_.get(this.props, 'section.subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.keynotecards') && 
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(this.props, 'section.keynotecards'), (plan, plan_idx) => (
                  <div key={plan_idx} className={'cell plan' + (_.get(plan, 'highlight') ? ' highlight' : '')}>
                    <div className="plan-inside">
                    <img src={safePrefix(_.get(plan, 'image'))} className="plan-img" alt={_.get(plan, 'title')} />
                    <h3 className="plan-name">{_.get(plan, 'title')}</h3>
                    <h4 className="plan-name">{_.get(plan, 'title')}</h4>
                    <div className="plan-details">
                      {markdownify(_.get(plan, 'details'))}
                    </div>
                    {_.get(plan, 'actions') && 
                      <CtaButtons {...this.props} actions={_.get(plan, 'actions')} />
                    }
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}
