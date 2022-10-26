import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';

const NavFooter = ({ className }) => {
  return (
    <div
      css={css`
        align-items: center;
        background: #afe2e3;
        bottom: 0;
        display: flex;
        height: 60px;
        justify-content: center;
        left: 0;
        position: fixed;
        width: 340px;

        @media screen and (max-width: 1240px) {
          width: 277px;
        }
      `}
      className={className}
    >
      <ExternalLink
        to="https://newrelic.com/instant-observability"
        css={css`
          color: #00586f;
          font-size: 18px;
          line-height: 24px;
          position: relative;
          text-underline-offset: 10px;
        `}
      >
        See our 500+ quickstarts
        <Icon
          css={css`
            position: absolute;
            top: 4px;

            && path {
              display: none;
            }
          `}
          name="fe-external-link"
        />
      </ExternalLink>
    </div>
  );
};

NavFooter.propTypes = {
  className: PropTypes.string,
};

export default NavFooter;