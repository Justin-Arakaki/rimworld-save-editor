import * as React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button'

const CustyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 400,
  margin: 50
}));

export default function StyledCustomization() {
  return (<CustyButton>HERE</CustyButton>);
}
