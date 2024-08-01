// username validation
export const validUserName = (username: string) => {
  if (username.trim().length >= 2) {
    return true;
  }
  return false;
};

// email validation
export const validEmail = (email: string) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const result = emailRegex.test(email.trim());
  return result;
};

// password validation
export const checkPassWordValidation = (password: string) => {
  const engRegex = new RegExp('[a-zA-Z]');
  const numRegex = new RegExp('\\d');
  const specialCharRegex = new RegExp('[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣s\\s]'); // 영어, 한글, 공백을 제외한 나머지문자 = 즉 , 특수문자
  const result1 = engRegex.test(password); // 영어가 있으면 true
  const result2 = numRegex.test(password); // 숫자가 있는지확인
  const result3 = specialCharRegex.test(password); // 특수문자가 있는지 확인(여)
  if (result1 && result2) {
    return true;
  }
  if (result2 && result3) {
    return true;
  }
  if (result1 && result3) {
    return true;
  }
  return false;
};
