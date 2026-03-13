import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, Stack, TextField, TextFieldProps, InputProps, InputBaseProps, PaperProps } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import { SlideTransition } from "./Transitions/SlideTransition";
import FormButton from "./FormButton";
import _ from "lodash";
import Link from "next/link";
import constants from "@/constants";
import { FormInput } from "@/types/form";

export type InputDialogProps<T extends any> = {
  open: boolean;
  title: string;
  text?:string;
  inputs?:FormInput[];
  submitText?:string;
  disableCloseOnComplete?:boolean;
  onSubmit?: (formData:FormData) => T|Promise<T>;
  /**
   * This gets called when the form is done submitting
   * @param submitReturnValue 
   * @returns 
   */
  onComplete?: (onSubmitReturnValue:T)=>void;
  onClose?: () => void;
  PaperProps?: PaperProps;
};

export function inputDialogPropsReducer<T>(state:InputDialogProps<T>, update:Partial<InputDialogProps<T>>):InputDialogProps<T> {
  return {...state, ...update};
}

const getInputs = (inputs:FormInput[]) => {
  return (
    inputs.map((input, i)=>(
      input.type === 'text' ?
        <TextField key={i} required={input.required} name={input.name} defaultValue={input.defaultValue} margin="dense" label={input.label || _.startCase(input.name)} placeholder={input.placeholder || _.startCase(input.name)} type="text" size="small" fullWidth={input.fullWidth} multiline={input.multiline} {...input.inputProps} />
      : input.type === 'check' ? 
        <FormControlLabel key={i} control={<Checkbox required={input.required} name={input.name} defaultChecked={input.defaultValue} {...input.inputProps} />} label={input.label} />
      : input.type === 'select' ?
        <FormControl key={i} fullWidth={input.fullWidth} size="small">
          <InputLabel id={input.name}>{input.label || _.startCase(input.name)}</InputLabel>
          <Select labelId={input.name} required={input.required} name={input.name} defaultValue={input.defaultValue || ''} margin="dense" label={input.label || _.startCase(input.name)} fullWidth={input.fullWidth} {...input.inputProps} >
            {input.options.map((opt, i)=><MenuItem key={i} value={opt.value} {...opt.itemProps}>{opt.label}</MenuItem>)}
          </Select>
        </FormControl>
      : input.type === 'custom' ?
        input.component
      : input.type === 'submit' ?
        <FormButton key={i} name={input.name} {...input.inputProps} >{input.label || 'Send'}</FormButton>
      : null
    ))
  )
}

export default function InputDialog<T extends any>({ open, title, text, inputs=[], submitText='Submit', disableCloseOnComplete, onSubmit=()=>{return undefined as any}, onComplete=()=>{}, onClose=()=>{}, PaperProps }:InputDialogProps<T>){
  return (
    <Dialog PaperProps={PaperProps} open={open} onClose={onClose} TransitionComponent={SlideTransition}>
      <form action={async (formData)=>{
        let returnValue = await onSubmit(formData);
        onComplete(returnValue);
        if(!disableCloseOnComplete)
          onClose();
      }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        {text && text.split("\n").map((line, i) => (
          <DialogContentText key={i}>{line}</DialogContentText>
        ))}
        {inputs.length && getInputs(inputs)}
          {/* {inputs.length && inputs.map((input, i)=>(
            <TextField key={i} required={input.required} name={input.name} autoFocus={i===0} margin="dense" label={input.label || _.startCase(input.name)} placeholder={input.placeholder || _.startCase(input.name)} type="text" fullWidth={input.fullWidth} multiline={input.multiline} variant="standard" {...input.inputProps} />
          ))} */}
      </DialogContent>
      <DialogActions >
        <Stack width='100%' direction='row' justifyContent={'space-between'}>
          <Stack direction='row' alignItems='center' spacing={2}>
            {/* <Link href={`tel:${constants.contactPhone}`} target="_blank"><IconButton size="large"><CallIcon /></IconButton></Link> */}
          </Stack>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Button
              sx={{mt:0}}
              aria-label="cancel"
              variant="outlined"
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
          <FormButton sx={{mt:0}} inputs={inputs} variant="contained">{submitText}</FormButton>
          </Stack>
        </Stack>
      </DialogActions>
      </form>
    </Dialog>
  );
}