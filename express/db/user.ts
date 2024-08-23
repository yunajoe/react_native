import { pool } from ".";

type CreateUser = {
  username: string;
  email: string;
  password: string;
};

type KaKaoCreateUser = {
  kakaoId: string;
  kakaoEmail: string;
  kakaoNickName: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
};

type CheckUserByEmailAndPassword = {
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

// username 업데이트
export const updateUserName = async (email: string, username: string) => {
  try {
    const result = await pool.query(
      "UPDATE users SET username = $1 WHERE email = $2",
      [username, email]
    );
    return result.rowCount > 0;
  } catch (err) {
    return false;
  }
};

// kakao 관련

export const kakaoCreateUser = async (data: KaKaoCreateUser) => {
  const {
    kakaoId,
    kakaoEmail,
    kakaoNickName,
    profileImageUrl,
    thumbnailImageUrl,
  } = data;
  try {
    const result = await pool.query(
      `INSERT INTO users (
        kakao_id, 
        kakao_username, 
        kakao_email, 
        email, 
        kakao_profile_image_url, 
        kakao_thumbnail_image_url
      ) VALUES ($1, $2, $3, $3, $4, $5)`,
      [kakaoId, kakaoNickName, kakaoEmail, profileImageUrl, thumbnailImageUrl]
    );

    return result.rowCount > 0;
  } catch (err) {
    return false;
  }
};

export const getUserById = async (id: string) => {
  try {
    const result = await pool.query(
      `SELECT *
     FROM users
     WHERE id = $1`,
      [id]
    );
    return result.rows.length > 0 && result.rows[0];
  } catch (err) {
    return false;
  }
};

export const getUserIdByKakaoId = async (kakaoId: string) => {
  try {
    const result = await pool.query(
      `SELECT id
     FROM users
     WHERE kakao_id = $1`,
      [kakaoId]
    );
    return result.rows.length > 0 && result.rows[0].id;
  } catch (err) {
    return false;
  }
};

// email로 user가 있는지 확인하기
export const checkUserByEmail = async (email: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);
  return result.rows[0];
};

// kakao_email로 uesr아 있는지 확인
export const checkUserByKaKaoEmail = async (kakaoEmail: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE kakao_email=$1`, [
    kakaoEmail,
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
