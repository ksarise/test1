export const logIn = (username, password) => (
  new Promise((resolve, reject) => {
    if (username === 'admin' && password === 'admin') {
      resolve();
    } else {
      reject(new Error('Wrong login to this password'));
    }
  })
);
