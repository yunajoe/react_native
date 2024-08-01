import { pool } from ".";

type CreateUser = {
  username: string;
  email: string;
  password: string;
};

export const createUser = async (data: CreateUser) => {
  const { username, email, password } = data;
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, password]
    );
    return result.rowCount > 0;
  } catch (err) {
    throw err;
  }
};
// email로 user가 있는지 확인하기
export const checkUserByEmail = async (email: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  return result.rows[0];
};

// userName으로 user가 있는지확인하기
export const checkUserByUserName = async (username: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE username=$1`, [
    username,
  ]);
  return result.rows[0];
};

// email과 password user확인
type CheckUserByEmailAndPassword = {
  email: string;
  password: string;
};

export const checkUserByEmailAndPassword = async ({
  email,
  password,
}: CheckUserByEmailAndPassword) => {
  const result = await pool.query(
    `SELECT * FROM users WHERE email=$1 AND password = $2`,
    [email, password]
  );

  return result.rows[0];
};

// email로 user삭제

export const deleteUser = async (email: string) => {
  try {
    const result1 = await pool.query("DELETE FROM users WHERE email = $1", [
      email,
    ]);
    const result2 = await pool.query(
      "DELETE FROM userstoken WHERE email = $1",
      [email]
    );
    return result1.rowCount > 0 && result2.rowCount > 0 ? true : false;
  } catch (error) {
    return false;
  }
};
