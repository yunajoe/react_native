import {checkEmail, checkUser, checkUserName} from '.';

export const handleCheckByUserName = async (inputUserName: string) => {
  try {
    const result = await fetch(checkUserName, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: inputUserName}),
    });
    const jsonData = await result.json();
    return jsonData;
  } catch (err) {
    console.log('err', err);
  }
};

export const handleCheckByEmail = async (inputEmail: string) => {
  try {
    const result = await fetch(checkEmail, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: inputEmail}),
    });

    const jsonData = await result.json();
    return jsonData;
  } catch (err) {
    console.log('err', err);
  }
};

export const handleCheckByEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const result = await fetch(checkUser, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password}),
    });

    const jsonData = await result.json();
    return jsonData;
  } catch (err) {
    console.log('err', err);
  }
};
