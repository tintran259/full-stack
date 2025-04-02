const bcrypt = require('bcrypt');

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.log('error hashPassword:', error);
  }
};

export const comparePassword = async (
  plainPassword: string,
  hashPassword: string,
): Promise<string> => {
  try {
    const match = await bcrypt.compare(plainPassword, hashPassword);
    return match;
  } catch (error) {
    console.log('error comparePassword:', error);
  }
};
