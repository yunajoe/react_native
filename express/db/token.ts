import { pool } from ".";

// usersToken테이블에 있는지 확인
export const isUserTokenAlready = async (email: string) => {
  const result = await pool.query(
    "SELECT COUNT(*) AS count FROM usersToken WHERE email = $1",
    [email]
  );
  return result.rows[0].count > 0;
};

type SaveToken = {
  users_id: number;
  email: string;
  accessToken: string;
  refreshToken: string;
};
export const saveToken = async ({
  users_id,
  email,
  accessToken,
  refreshToken,
}: SaveToken) => {
  try {
    const result = await isUserTokenAlready(email);
    if (result) {
      await pool.query(
        "UPDATE usersToken SET accessToken = $2, refreshToken = $3 WHERE email = $1",
        [email, accessToken, refreshToken]
      );
    } else {
      await pool.query(
        "INSERT INTO usersToken (users_id, email, accessToken, refreshToken) VALUES ($1, $2, $3, $4)",
        [users_id, email, accessToken, refreshToken]
      );
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const checkIsTokensNull = async (email: string) => {
  const isNullQuery = `
    SELECT 
      CASE 
        WHEN accessToken IS NULL AND refreshToken IS NULL THEN true
        ELSE false
       END AS isBothTokensNull
    FROM 
      usersToken
    WHERE 
      email = $1;
  `;
  const { rows } = await pool.query(isNullQuery, [email]);
  const { isbothtokensnull } = rows[0];
  return isbothtokensnull;
};

export const deleteToken = async (email: string) => {
  try {
    const bothCheckIsNull = await checkIsTokensNull(email);
    if (!bothCheckIsNull) {
      const result = await pool.query(
        "UPDATE usersToken SET accessToken = NULL, refreshToken = NULL WHERE email = $1",
        [email]
      );
      return result.rowCount > 0 ? true : false;
    }
    return false;
  } catch (error) {
    return false;
  }
};
