import { useState } from 'react';

// custom hook은 앞 글자를 use로 시작한다.
// 파라미터에는 입력받아와야할 값을 넣는다.
export function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue('');
    submitAction(inputValue);
  };

  // custom hook은 리턴 값으로 배열을 받는다.
  // 변수와 함수를 내보내서 입력받아오거나 사용하는 느낌으로 사용된다.
  return [inputValue, handleSubmit, handleChange];
}
