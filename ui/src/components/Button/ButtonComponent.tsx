import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsVariantOverrides } from '@mui/material/Button/Button';

interface ButtonProps {
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  testId?: string;
}

export default function ButtonComponent(props:ButtonProps) {
  const {variant, onClick, disabled, className, testId, text} = props;
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} onClick={onClick} disabled={disabled} className={className} data-testid={testId}>{text}</Button>
    </Stack>
  );
}
