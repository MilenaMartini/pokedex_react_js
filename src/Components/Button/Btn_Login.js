import React from 'react';
import { BtnCustomizado } from './Styles_Btn_Login';


const Btn = ({
  //se não quiser perde o botão de novo
  //não coloque  () =>  na linha anterior -_-
  type,
  text,
  onClick,
  disabled,
}) => {
  return (
    <BtnCustomizado
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
      </BtnCustomizado>
  );
}

export default Btn;