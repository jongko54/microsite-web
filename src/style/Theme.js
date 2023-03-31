const size = {
  mobile: 768,
  tab: 1440,
}

const theme = {
  color: {
    PRIMARY: '#4575F5',
    SECONDARY: '#6F85E3',
    POINT: '#F58839',
    POINT_SUB: '#FFCAB2',
    ORANGE: '#FF9243',
    WARNING: '#FF6060',
    WARNING_MESSAGE: '#BA0000',
    SUCCESS: '#336BFF', 
    BLACK0: '#252525',
    BLACK2: '#2F2F2F',
    BLACK3: '#393939',
    BLACK4: '#545454',
    BLACK5: '#1A1A1A',
    WHITE: '#FFFFFF',
    GRAY: '#6C6C6C',
    GRAY2: '#EBEBEB',
    GRAY3: '#989898',
    GRAY4: '#808080',
    BLUE: '#176FFF',
    BLUE2: '#0C1F6F',
    BLUE3: '#2EA5FF',
    BG_WHITE: '#FAFAFA',
    BG_WHITE2: '#F5F5F5',
    BG_GRAY: '#F9F9F9',
    BG_BLACK:'#333333',
    YELLOW: '#FAE300',
    GREEN: '#03CF5D'
  },
  gradientsColor: {
    GRADIENT0: `linear-gradient(0deg, rgba(89, 116, 255, 0.5) 0%, rgba(95, 161, 255, 0.5) 61.8%, rgba(99, 189, 255, 0.5) 100%)`,
  },
  window: {
    tab: `@media screen and (max-width: ${size.tab}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
  }
}

export default theme;