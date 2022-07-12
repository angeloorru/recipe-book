import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// eslint-disable-next-line import/no-unresolved
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsVariantOverrides } from '@mui/material/Button/Button';

interface ButtonProps {
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>
  text: string;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  // eslint-disable-next-line react/require-default-props
  testId?: string;
}

export default function ButtonComponent(props:ButtonProps) {
  const { variant, onClick, disabled, className, testId, text } = props;
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        className={className}
        data-testid={testId}
      >
        {text}
      </Button>
    </Stack>
  );
}
