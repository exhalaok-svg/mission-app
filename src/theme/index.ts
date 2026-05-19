export const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  danger: '#FF3B30',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  text: {
    primary: '#000000',
    secondary: '#3C3C43',
    tertiary: '#8E8E93',
    inverse: '#FFFFFF',
  },
  border: '#C6C6C8',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  largeTitle: { fontSize: 34, fontWeight: '700' as const, lineHeight: 41 },
  title1:     { fontSize: 28, fontWeight: '700' as const, lineHeight: 34 },
  title2:     { fontSize: 22, fontWeight: '700' as const, lineHeight: 28 },
  title3:     { fontSize: 20, fontWeight: '600' as const, lineHeight: 25 },
  headline:   { fontSize: 17, fontWeight: '600' as const, lineHeight: 22 },
  body:       { fontSize: 17, fontWeight: '400' as const, lineHeight: 22 },
  callout:    { fontSize: 16, fontWeight: '400' as const, lineHeight: 21 },
  subhead:    { fontSize: 15, fontWeight: '400' as const, lineHeight: 20 },
  footnote:   { fontSize: 13, fontWeight: '400' as const, lineHeight: 18 },
  caption:    { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};
