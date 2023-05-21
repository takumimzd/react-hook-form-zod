import {
  useForm as useDefaultForm,
  UseFormProps,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';

// defaultValues を初期化しなくても型が通るのでラップして必須にする
export const useForm = <FORM_TYPE extends FieldValues>(
  props: UseFormProps<FORM_TYPE> & {
    defaultValues: FORM_TYPE;
  },
): UseFormReturn<FORM_TYPE> => {
  return useDefaultForm(props);
};
