import React from 'react';
import './CustomAlertStyles.scss';
import Alert from '@mui/material/Alert';

interface AlertComponentProps {
  message: string;
  severity: string;
  attributes?: any;
}

function CustomAlert(props: AlertComponentProps) {
  const { message, severity = 'warning', attributes } = props;
  console.log(message);
  return (
    <div className="alert">
      <Alert variant="outlined" severity={severity} {...attributes}>{message}</Alert>
    </div>
  );
}

export default CustomAlert;
