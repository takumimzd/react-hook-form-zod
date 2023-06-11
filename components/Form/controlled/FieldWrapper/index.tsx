type Props = {
  children: React.ReactNode;
  name: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
};

export type FieldWrapperWithoutChildrenProps = Omit<Props, 'children'>;

// どのinputでも共通で使用するコンポーネント
// ラベルやエラーの表示位置、必須ラベルの表示位置などの1つのフォームUIをレイアウトを持つ
// 今後、フォームの下の説明などもここに追加し、どのinput要素でも同じレイアウトにする
export const FieldWrapper: React.FC<Props> = ({
  children,
  name,
  label,
  required,
  errorMessage,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {required && <p>必須 *</p>}
      {children}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
