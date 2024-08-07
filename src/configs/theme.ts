import { colors } from '@/constants/colors';
import { ThemeConfig } from 'antd';

export default {
  components: {
    Drawer: {},
    Transfer: {},
    Table: {},
  },
  token: {
    wireframe: false,
    sizeStep: 4,
    sizeUnit: 4,
    colorPrimary: colors.PRIMARY_COLOR,
    colorText: colors.PRIMARY_COLOR,
  },
} as ThemeConfig;