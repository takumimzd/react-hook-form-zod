import { FieldValues, Path, useFormContext } from 'react-hook-form';

type Props<T> = {
  name: Path<T>;
  label: string;
  errorMessage: string | undefined;
};

export const DateTimeLocalInput = <T extends FieldValues = never>({
  name,
  label,
  errorMessage,
}: Props<T>): ReturnType<React.FC> => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='datetime-local' {...register(name)} />
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};
