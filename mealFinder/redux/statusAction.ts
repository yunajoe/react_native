// status

type LoginStatus = {
  status: number;
  message: string;
};

export const loginStatus = ({status, message}: LoginStatus) => ({
  type: 'STATUS/login',
  payload: {
    loginStatus: status,
    loginMessage: message,
  },
});
