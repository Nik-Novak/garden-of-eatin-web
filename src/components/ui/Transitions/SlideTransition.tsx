import React, { forwardRef } from 'react';
import Slide from '@mui/material/Slide';
import { SlideProps } from '@mui/material';

export const SlideTransition = forwardRef(function SlideTransition(props: SlideProps, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
