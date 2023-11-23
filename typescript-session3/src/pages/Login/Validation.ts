import * as yup from 'yup';
export const validation = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .email('이메일 형식이 올바르지 않습니다'),
  password: yup.string().required('비밀번호를 입력해주세요'),
});
