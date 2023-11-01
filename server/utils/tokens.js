import jwt from "jsonwebtoken";

export const createJwt = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyToken = (requestedToken) => {
  const decodedToken = jwt.verify(requestedToken, process.env.JWT_SECRET);
  return decodedToken;
};
