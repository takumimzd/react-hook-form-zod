import { FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T> = {
  name: Path<T>;
  label: string;
  errorMessage: string | undefined;
};

export const TextInput = <T extends FieldValues = never>({
  name,
  label,
  errorMessage,
}: Props<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='text' {...register(name)} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};
