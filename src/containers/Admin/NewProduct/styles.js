import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.84);
  border-radius: 8px;
  box-shadow: 0 2px 4px #fff;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  color: #ffffff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;
export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed #ccc;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #bb86fc;

  input {
    display: none;
  }

  > svg {
    margin-bottom: 10px;
    width: 200px;
    height: 30px;
    fill: #bb86fc;
    margin-right: 4px;
  }
`;

export const InputGroupCategorie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;

  color: #bb86fc;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #181717;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1a1919;
  color: #ee5d1a;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #8737ce;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #bb86fc;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 10px;
`;
