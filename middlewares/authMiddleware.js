import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";

const userAuth = async (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1]; // Assuming the token is passed in the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Find the user using the decoded userId
    const user = await Users.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach the user to the request object (so the next middleware/controller can access it)
    req.user = user;  // Updated to use req.user for consistency

    // Proceed to the next middleware/controller
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default userAuth;
