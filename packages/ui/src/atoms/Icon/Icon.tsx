'use client';
import React from 'react';
import { IIconProps, IconSize } from './models/model';
import './styles/icon.scss';
import SyuIcons from './utils/icons';

/**
 * @prop {Icons} name - Uses svg with the passed name.
 * This prop is mandatory.
 */

/**
 * @prop {IconSize} size - Sets the size of the icon in pixels.
 * This prop is optional and it's default value is 'sm'.
 */

/**
 * @prop {number} customWidth - Sets the width of the icon in pixels.
 * This prop is optional.
 */

/**
 * @prop {string} cssClasses - Sets the css classes to the svg.
 * This prop is optional.
 */

const Icon: React.FC<IIconProps> = ({ name, size = IconSize.sm, customWidth, cssClasses }) => {
  const IconTemplate = SyuIcons[name];
  const orientationCss = '';

  if (typeof IconTemplate === 'object') {
    return null;
  }

  return (
    <IconTemplate
      className={`${!customWidth ? size : ''} ${cssClasses} ${orientationCss}`}
      width={customWidth && customWidth}
    />
  );
};

export default Icon;