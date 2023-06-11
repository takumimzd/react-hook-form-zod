import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldWrapper, FieldWrapperWithoutChildrenProps } from '../FieldWrapper';

type ConnectTextInputType = any;

export type TextFieldProps = {
  connectTextInput?: ConnectTextInputType;
  inputRef?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>['ref'];
  fieldWrapperProps: FieldWrapperWithoutChildrenProps;
};

// フォームで使うテキストフィールド
// FieldWrapperでラップしたinput(ここはconnectになる)を返す。
// このコンポーネントを使用することで、どの画面のフォームでも同じレイアウトにすることができる
export const TextField = ({
  fieldWrapperProps,
  inputRef,
  ...rest
}: TextFieldProps): JSX.Element => {
  return (
    <FieldWrapper {...fieldWrapperProps}>
      {/* ここをconnectのinputに置き換える */}
      <input ref={inputRef} id={fieldWrapperProps.name} {...rest} />
    </FieldWrapper>
  );
};
