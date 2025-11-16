interface LoginData {
  email: string;
  password: string;
}

export async function fakeLogin({ email, password }: LoginData) {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      // Simula usuários válidos
      const validUser = {
        email: "teste@teste.com",
        password: "123456",
      };

      if (email === validUser.email && password === validUser.password) {
        resolve({ token: "fake-jwt-token-123456" });
      } else {
        reject(new Error("Email ou senha inválidos"));
      }
    }, 1000);
  });
}
