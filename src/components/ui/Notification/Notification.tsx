import { Alert, AlertProps, Slide, SlideProps, Snackbar, SnackbarProps, Stack } from "@mui/material";
import { ReactNode } from "react";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export type NotificationProps = {children:ReactNode} & Omit<AlertProps, 'children'> & Omit<SnackbarProps, 'children'>;

export default function Notification({children, onClose, anchorOrigin={ vertical: 'bottom', horizontal: 'center' } , autoHideDuration, slotProps, ...props}:NotificationProps){
  return (
    <Snackbar {...props} anchorOrigin={anchorOrigin} autoHideDuration={autoHideDuration} slotProps={slotProps} slots={{transition:SlideTransition}} onClose={onClose}>
      <Alert {...props} style={{alignItems:'center'}} onClose={onClose}>
        <Stack sx={{flexDirection:'row', alignItems:'center'}}>
          {children}
        </Stack>
      </Alert>
    </Snackbar>
  )
}