export const checkEmailValidation = (value: string) => {
  const EMAIL_REGEX =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return EMAIL_REGEX.test(value);
};

export const checkPasswordValidation = (value: string) => {
  return value.length >= 8;
};
