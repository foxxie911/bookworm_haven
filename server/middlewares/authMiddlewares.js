import { verifyToken } from "../utils/tokens.js";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";

export const authenticateUser = (req, res, next) => {
  const token = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication Error!");
  try {
    // Prepare token for verification
    const tokenStr = JSON.stringify(token);
    const tokenArr = tokenStr.split('"');

    // Verify token
    const { userId, role } = verifyToken(tokenArr[3]);
    req.user = { userId, role };
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("Authentication error");
  }
};

export const authorizePermissions = (...role) => {
  console.log(role);
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorize to access this route");
    }
    next();
  };
};
