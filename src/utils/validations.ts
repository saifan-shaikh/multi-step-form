const validateName = (name:string) => {
  if(!name) return false;
  const NAME_REGEX = new RegExp(/^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/);
  return NAME_REGEX.test(name);
}

const validateEmail = (email:string) => {
  if(!email) return false;
  const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return EMAIL_REGEX.test(email);
}

const validatePhone = (phone:string) => {
  if(!phone) return false;
  const PHONE_REGEX = new RegExp(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/);
  return PHONE_REGEX.test(phone);
}

export { validateName, validateEmail, validatePhone };