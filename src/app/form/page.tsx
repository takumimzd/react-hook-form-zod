'use client';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from '../../../hooks/useForm';
import { TextFieldController } from '../../../components/Form/controlled/TextField/TextFieldController';

export type Form = {
  title: string;
};

const schema = z.object({
  title: z.string().min(1, { message: '必須項目です' }),
});

export default function Home() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>登録フォーム</h1>
      <form onSubmit={onSubmit}>
        <TextFieldController
          name='title'
          control={control}
          // connectTextInput={{}}
          fieldWrapperProps={{
            name: 'title',
            label: '名前',
            required: true,
            errorMessage: errors.title?.message,
          }}
        />
        <button type='submit'>送信</button>
      </form>
    </main>
  );
}
