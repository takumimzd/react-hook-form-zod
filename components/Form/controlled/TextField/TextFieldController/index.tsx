import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { TextField, TextFieldProps } from '..';

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps & UseControllerProps<T>;

// react-hook-formに依存するコンポーネント
// このコンポーネントとTextField/index.tsxを分けておくことで、react-hook-formを辞める時は、このコンポーネントを修正するだけで良くなる
export const TextFieldController = <T extends FieldValues>(
  props: RhfTextFieldProps<T>,
): JSX.Element => {
  const {
    name,
    control,
    fieldWrapperProps: { label, required, errorMessage },
    // connectTextInput,
  } = props;

  const {
    field: { ref, ...rest },
  } = useController<T>({ name, control });

  return (
    <TextField
      fieldWrapperProps={{ name, label, required, errorMessage }}
      // connectTextInput={connectTextInput}
      inputRef={ref}
      {...rest}
    />
  );
};
