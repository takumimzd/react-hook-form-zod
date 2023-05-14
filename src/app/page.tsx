'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

type Inputs = {
  title: string;
  dueDate: string;
};

const schema = z.object({
  title: z.string().min(1, { message: '必須項目です' }),
  dueDate: z.coerce.date().min(new Date(), { message: '期限が過ぎています' }),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>登録フォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='due-date'>期限: </label>
          <input id='due-date' type='datetime-local' defaultValue='test' {...register('dueDate')} />
          {errors.dueDate && <span>{errors.dueDate.message}</span>}
        </div>
        <div>
          <label htmlFor='title'>タスク名: </label>
          <input id='title' {...register('title')} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <button type='submit'>決定</button>
      </form>
    </main>
  );
}

// 仕様
// 1. 送信ボタンを押したら、入力した値が送信される
// 2. タイトルは必須であり、送信後に入力されていない場合、エラーがフォームの下に表示される
// 3. 期限が過ぎている場合、エラーがフォームの下に表示される
// 4. エラーは、入力がある場合は消える
