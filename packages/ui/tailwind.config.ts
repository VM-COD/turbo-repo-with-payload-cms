// import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config/tailwind";

// const config: Pick<Config, "prefix" | "presets" | "content"> = {
//   content: ["./src/**/*.tsx"],
//   prefix: "ui-",
//   presets: [sharedConfig],
// };

// export default config;

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{jsx,tsx}',
  ],

  theme: {
    screens: {
      xs: '0',
      sm: '600px',
      tablet: '768px',
      md: '1348px',
      lg: '1441px',
      xl: '1921px'
    },
    extend: {
      colors: {
        /*Start: Text colors*/
        'brand-accent-color': '#E756A4',
        'brand-enhanced-accent-color': '#E9357B',
        'primary-text-color-dark': '#1E1E48',
        'primary-text-color-light': '#FFFFFF',
        'secondary-text-color-dark': '#4B4B63',
        'secondary-text-color-light': '#BBBBC8',
        'tertiary-text-color-dark': '#6D6D80',
        'tertiary-text-color-light': '#FFFFFF99',
        'disabled-text-color-dark': '#BBBBC4',
        'disabled-text-color-light': '#FFFFFF66',
        'interactive-text-color-dark': '#E9357B',
        'interactive-text-color-light': '#ED5993',
        /*End: Text colors*/

        /*Start: Surface background colors*/
        'surface-flat-color': '#FFFFFF',
        'surface-sunken-color': '#F3F3F4',
        'surface-elevated-color': '#FFFFFF',
        'surface-brand-color': '#E9357B1A',

        'surface-dark-color': '#1E1E48',
        'surface-dark-elevated-color': '#404063',
        'surface-scrim-layer-color': '#1E1E484D',
        'surface-bg-sunken-color': '#F3F3F4',
        /*End: Surface background colors*/

        /*Start: Border colors*/
        'dark-border-color': '#1E1E4826',
        'light-border-color': '#FFFFFF26',
        /*End: Border colors*/

        /*Start: Button colors*/
        'primary-button-color': '#E9357B',
        'primary-button-text-color': '#FFFFFF',
        'primary-button-disabled-text-color': '#6D6D80',
        'primary-button-hover-color': '#ED5D95',
        'primary-button-pressed-color': '#BD2D6A',
        'primary-button-disabled-color': '#CFCFD3',

        'primary-text-only-button-text-color': '#E9357B',
        'primary-text-only-button-hover-text-color': '#ED5D95',
        'primary-text-only-button-pressed-text-color': '#BD2D6A',
        'primary-text-only-button-disabled-text-color': '#bbbbc4',

        'negative-primary-button-color': '#E43F3F',
        'negative-primary-button-text-color': '#FFFFFF',
        'negative-primary-button-disabled-text-color': '#6D6D80',
        'negative-primary-button-hover-color': '#E96565',
        'negative-primary-button-pressed-color': '#B9353A',
        'negative-primary-button-disabled-color': '#CFCFD3',

        'negative-primary-text-only-button-text-color': '#E43F3F',
        'negative-primary-text-only-button-disabled-text-color': '#6D6D80',
        'negative-primary-text-only-button-hover-text-color': '#E96565',
        'negative-primary-text-only-button-pressed-text-color': '#B9353A',

        'secondary-button-bg-color': '#FFFFFF',
        'secondary-button-text-color': '#E9357B',
        'secondary-button-hover-color': '#F3F3F4',
        'secondary-button-pressed-color': '#E7E7E9',
        'secondary-button-disabled-color': '#FFFFFF',

        'secondary-text-only-button-text-color': '#1E1E48',
        'secondary-text-only-button-hover-text-color': '#E9357B',
        'secondary-text-only-button-pressed-text-color': '#BD2D6A',
        'secondary-text-only-button-disabled-text-color': '#bbbbc4',

        'negative-secondary-button-bg-color': '#FFFFFF',
        'negative-secondary-button-text-color': '#E43F3F',
        'negative-secondary-button-hover-color': '#F3F3F4',
        'negative-secondary-button-pressed-color': '#E7E7E9',
        'negative-secondary-button-disabled-color': '#FFFFFF',

        'negative-secondary-text-only-button-text-color': 'rgba(228, 63, 63, 0.2)',
        'negative-secondary-text-only-button-hover-text-color': 'rgba(233, 101, 101, 0.2)',
        'negative-secondary-text-only-button-pressed-text-color': 'rgba(185, 53, 58, 0.2)',
        'negative-secondary-text-only-button-disabled-text-color': 'rgba(187, 187, 196, 0.2)',

        'tertiary-button-color': '#FFFFFF',
        'tertiary-button-text-color': '#1E1E48',
        'tertiary-button-hover-color': '#F3F3F4',
        'tertiary-button-pressed-color': '#E7E7E9',
        'tertiary-button-disabled-color': '#fff',

        'tertiary-text-only-button-text-color': '#6D6D80',
        'tertiary-text-only-button-hover-text-color': '#E9357B',
        'tertiary-text-only-button-pressed-text-color': '#BD2D6A',
        'tertiary-text-only-button-disabled-text-color': '#bbbbc4',

        'negative-tertiary-button-color': '#FFFFFF',
        'negative-tertiary-button-text-color': '#E43F3F',
        'negative-tertiary-button-hover-color': '#F3F3F4',
        'negative-tertiary-button-pressed-color': '#E7E7E9',
        'negative-tertiary-button-disabled-color': '#F3F3F4',

        'negative-tertiary-text-only-button-text-color': 'rgba(228, 63, 63, 0.2)',
        'negative-tertiary-text-only-button-hover-text-color': 'rgba(233, 101, 101, 0.2)',
        'negative-tertiary-text-only-button-pressed-text-color': 'rgba(185, 53, 58, 0.2)',
        'negative-tertiary-text-only-button-disabled-text-color': 'rgba(187, 187, 196, 0.2)',

        'button-focus-outline-web': 'rgba(233, 53, 123, 0.2)',
        'button-focus-outline-mobile': 'rgba(231, 86, 164, 0.2)',
        'button-focus-outline-destructive': 'rgba(228, 63, 63, 0.2)',
        /*End: Button colors*/

        /*Start: Link colors*/
        'link-primary-color': '#E9357B',
        'link-primary-hover-color': '#ED5D95',
        'link-primary-pressed-color': '#BD2D6A',

        'link-secondary-color': '#FBD7E5',
        'link-secondary-hover-color': '#FBDfEa',
        'link-secondary-pressed-color': '#F2D5E1',
        'link-secondary-disabled-color': '#F1F1F3',

        'link-negative-primary-color': '#E43F3F',
        'link-negative-primary-hover-color': '#E96565',
        'link-negative-primary-pressed-color': '#B9353A',
        /*End: Link colors*/

        /*Start: Background and Foreground colors*/
        'error-text-color': '#E43F3F',
        'error-box-shadow-color': '#E43f3f33',
        'warning-text-color': '#E67F4C',
        'success-text-color': '#00B23B',
        'informative-text-color': '#9747FF',

        'error-color': '#F8CFCF',
        'warning-color': '#F9DFD2',
        'success-color': '#CCF0D8',
        'informative-color': '#E5D1FF',
        /*End: Background and Foreground colors*/

        /*Start: Input colors*/
        'input-border-color': '#1E1E4826',
        'input-box-shadow-color': '#E9357B33',
        /*End: Input colors*/

        /*Start: Otp input colors*/
        'otp-input-box-shadow-color': '#E9357B33',
        /*End: Otp input colors*/

        /* Start: Icon With details */
        'icon-with-details-subheading-color': '#FFFFFFA0',
        /* End: Icon With details */

        /*Start: Modal colors*/
        'modal-backdrop-color': '#1E1E48CC',
        'modal-box-shadow-color': '#0000001F',
        /*End: Modal colors*/

        /*Start: Navigation */
        'navigation-border-color': '#1E1E4826',
        /*Start: Navigation */

        /*Start: Landing Section*/
        'landing-section-course-button-border-color': '#1E1E4833',
        'landing-section-links-separator-color': '#D8D8D8',
        'landing-section-search-wrapper-box-shadow-color': '#00000005',
        /*End: Landing Section*/

        /*Start: Navigate Courses Section*/
        'input-field-dark-bg-color': '#462E4B',
        'input-field-dark-border-color': '#564B61',
        /*End: Navigate Courses Section*/

        /*Start: Card colors*/
        'card-box-shadow-color': '#0000000D',
        /*End: Card colors*/

        /*Start: Tag colors*/
        'tag-surface-brand-color': '#E9357B1A',
        /*End: Tag colors*/

        /*Start: Range slider*/
        'range-slider-track-bg-color': '#DBDBDC',
        /*End: Range slider*/

        /*Start: Notification card color*/
        'notification-card-border-color': '#1E1E481A',
        /*End:  Notification card color*/

        /*Start: Filter panel list color*/
        'filter-panel-list-count-color': '#F1F1F1',
        'filter-panel-list-separator-color': '#EEEEF1',
        /*End:  Filter panel list color*/

        /*Start: Overlay color */
        'overlay-color': '#FFFFFF33',
        /*End: Overlay color */

        /*Start: Profile card color*/
        'profile-card-bg': '#F8F8F8',
        /*End: Profile card color*/

        /*Start: Rating color*/
        'rating-color': '#FFB703'
        /*End:  Rating color*/
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        'extra-bold': '800'
      },
      fontSize: {
        'display-1': '7.4rem',
        'display-2': '4.8rem',
        'display-3': '3.4rem',
        'header-1': '2.8rem',
        'header-2': '2.2rem',
        'title-1': '1.8rem',
        'body-large': '1.6rem',
        'body-small': '1.4rem',
        'body-extra-small': '1.2rem'
      },
      spacing: {
        '1': '.1rem',
        '2': '.2rem',
        '3': '.3rem',
        '4': '.4rem',
        '5': '.5rem',
        '7': '.7rem',
        '7.5': '.75rem',
        '8': '.8rem',
        '6': '.6rem',
        '10': '1rem',
        '11': '1.1rem',
        '16': '1.6rem',
        '18': '1.8rem',
        '12': '1.2rem',
        '20': '2rem',
        '21': '2.1rem',
        '22': '2.2rem',
        '24': '2.4rem',
        '28': '2.8rem',
        '26': '2.6rem',
        '36': '3.6rem',
        '40': '4rem',
        '48': '4.8rem',
        '80': '8rem',
        '120': '12rem',
        '224': '22.4rem',
        '200': '20rem',
        '262': '26.2rem'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.32, 1, 0.23, 1)'
      },
      borderRadius: {
        '4': '.4rem',
        '8': '.8rem',
        '10': '1rem',
        '12': '1.2rem',
        '16': '1.6rem'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const typographyClasses = {
        '.body-r': {
          fontSize: '1.6rem',
          fontWeight: 500,
          lineHeight: '2.368rem',
          color: '#1E1E48'
        },
        '.body-large-b': {
          fontSize: '1.6rem',
          fontWeight: 700,
          lineHeight: '2.368rem'
        },
        '.body-large-r': {
          fontSize: '1.6rem',
          fontWeight: 500,
          lineHeight: '2.368rem'
        },
        '.body-small-b': {
          fontSize: '1.4rem',
          fontWeight: 700,
          lineHeight: '2.016rem'
        },
        '.body-small-r': {
          fontSize: '1.4rem',
          fontWeight: 500,
          lineHeight: '2.016rem'
        },
        '.button-large': {
          fontSize: '1.6rem',
          fontWeight: 700
        },
        '.button-small': {
          fontSize: '1.4rem',
          fontWeight: 700,
          lineHeight: '1.6rem'
        },
        '.label': {
          fontSize: '1.4rem',
          fontWeight: 800,
          lineHeight: '2rem',
          letterSpacing: '.2rem'
        },
        '.caption': {
          fontSize: '1.2rem',
          fontWeight: 500,
          lineHeight: '2rem'
        }
      };
      addUtilities(typographyClasses, ['responsive', 'hover']);
    },
    function ({ addBase, theme }) {
      const addColorVarsToRoot = (colorObj, colorGroup = '') =>
        Object.entries(colorObj).reduce((vars, [colorKey, value]) => {
          if (typeof value !== 'string') {
            return vars;
          }
          const cssVariable =
            colorKey === 'DEFAULT' ? `-${colorGroup}` : `-${colorGroup}-${colorKey}`;
          const newVars = { [cssVariable]: value };

          return { ...vars, ...newVars };
        }, {});

      addBase({
        ':root': addColorVarsToRoot(theme('colors'))
      });
    }
  ]
};

