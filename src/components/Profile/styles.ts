import styled from 'styled-components/native';
import { Image, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import theme from '../../styles/theme';

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const BoxModelGradient = styled(LinearGradient)`
  position: relative;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 200;
`;

export const GlassModel = styled.View`
  width: 265;
  height: 265px;
  background: ${theme.colors.profile};
  border-radius: 200;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,.1);
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 250px;
`;