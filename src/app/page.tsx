'use client';
import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from '../../hooks/useForm';
import { DateTimeLocalInput } from '../../components/DateTimeLocalnput';
import { TextInput } from '../../components/TextInput';

export type FormData = {
  title: string;
  dueDate: string;
};

const schema = z.object({
  title: z.string().min(1, { message: '必須項目です' }),
  dueDate: z.coerce.date().min(new Date(), { message: '期限が過ぎています' }),
});

export default function Home() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { title: '', dueDate: '' },
  });

  const errors = methods.formState.errors;

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>登録フォーム</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <DateTimeLocalInput<FormData>
            name='dueDate'
            label='期限: '
            errorMessage={errors.dueDate?.message}
          />
          <TextInput<FormData> name='title' label='タスク: ' errorMessage={errors.title?.message} />
          <button type='submit'>決定</button>
        </form>
      </FormProvider>
    </main>
  );
}

// 仕様
// 1. 送信ボタンを押したら、入力した値が送信される
// 2. タイトルは必須であり、送信後に入力されていない場合、エラーがフォームの下に表示される
// 3. 期限が過ぎている場合、エラーがフォームの下に表示される
// 4. エラーは、入力がある場合は消える
