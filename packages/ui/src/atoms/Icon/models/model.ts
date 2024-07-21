export enum Icons {
  SYU_DARK_LOGO = 'syu-dark-logo',
  BULB_ICON = 'bulb-icon'
}

export enum IconSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export interface IIconProps {
  name: Icons;
  size?: IconSize;
  customWidth?: number;
  cssClasses?: string;
}
