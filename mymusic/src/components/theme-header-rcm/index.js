import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const HZZThemeHeaderRCM = memo(function(props) {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

HZZThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

HZZThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default HZZThemeHeaderRCM;
