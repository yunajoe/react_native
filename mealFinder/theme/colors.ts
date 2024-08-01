const commonColor = {
  colors: {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
  },
};

const light = {
  themeColor: '#BBC3A4',
  appTitle: '#12372A',
  title: '#FBFADA',
  myInterestTitle: '',
  green100: '#D7E4C0',
  brown100: '#B3A398',
  ...commonColor.colors,
};

const dark = {
  themeColor: '#040D12',
  appTitle: '#FBFADA',
  title: '#FBFADA',
  myInterestTitle: '#D5CEA3',
  green200: '#5C8374',
  green100: '#93B1A6',
  ...commonColor.colors,
};

export default {light, dark};
