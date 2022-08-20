export const loginMock = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const loginMockIncorrect = {
  email: 'aaaa@aaaa.com',
  password: 'secret_admin',
}

export const loginMockNull = {
  email: '',
  password: 'secret_admin',
}

export const userMock = {
  id: 1,
  username: 'admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'secret_admin_encriptada',
};

export const userJwtMock = {
  data: {
    id: 1,
    username: 'admin',
    role: 'admin',
    email: 'admin@admin.com',
  }
};

export const tokenMock = {
  token: 'tokenMock',
};

export const roleMock = {
  role: 'admin',
};
