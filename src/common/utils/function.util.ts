export const getDupKeyMysql = (errorMessage: string) =>
  errorMessage.split('for key')[0];
