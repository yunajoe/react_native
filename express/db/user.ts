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
      "INSERT INTO users (username, email, sub_email_1, password) VALUES ($1, $2, $2, $3)",
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
        sub_email_1,
        kakao_profile_image_url, 
        kakao_thumbnail_image_url
      ) VALUES ($1, $2, $3, $3, $3, $4, $5)`,
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
  try {
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);
    return result.rows[0];
  } catch (err) {
    return false;
  }
};

// kakao_email로 uesr아 있는지 확인
export const checkUserByKaKaoEmail = async (kakaoEmail: string) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE kakao_email=$1`,
      [kakaoEmail]
    );
    return result.rows[0];
  } catch (err) {
    return false;
  }
};

export const checkUserByAllEmailColumns = async (email: string) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users 
       WHERE email = $1
          OR sub_email_1 = $1
          OR sub_email_2 = $1
          OR sub_email_3 = $1
          OR kakao_email = $1`,
      [email]
    );
    return result.rows[0];
  } catch (err) {
    return false;
  }
};
// userName으로 user가 있는지확인하기
export const checkUserByUserName = async (username: string) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE username=$1`, [
      username,
    ]);
    return result.rows[0];
  } catch (err) {
    return false;
  }
};

// email과 pwd로 user확인하기
export const checkUserByEmailAndPassword = async ({
  email,
  password,
}: CheckUserByEmailAndPassword) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE email=$1 AND password = $2`,
      [email, password]
    );
    return result.rows[0];
  } catch (err) {
    return false;
  }
};

// sub_email_1 또는 sub_email2 컬럼이 null값인지 확인
export const checkSubEmailIsNull = async (email: string) => {
  try {
    const result = await pool.query(
      `SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE email = $1
          AND (sub_email_2 IS NULL OR sub_email_3 IS NULL)
      ) AS exists`,
      [email]
    );

    return result.rows[0].exists;
  } catch (err) {
    return false;
  }
};

export const updateSubEmail = async (authEmail: string, email: string) => {
  try {
    const result = await pool.query(
      `UPDATE users
      SET sub_email_2 = CASE
          WHEN sub_email_2 IS NULL THEN $2
          ELSE sub_email_2
      END,
      sub_email_3 = CASE
          WHEN sub_email_2 IS NOT NULL AND sub_email_3 IS NULL THEN $2
          ELSE sub_email_3
      END
      WHERE email = $1;`,
      [authEmail, email]
    );

    return result.rowCount;
  } catch (err) {
    return false;
  }
};
