import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // -> Milliseconds
        httpOnly: true, // --> This Token is not accessible by client side (javascript) thus it prevents XSS attacks cross-site scripting attacks.
        sameSite: "strict", // --> This prevents CSRF attacks cross-site request forgery attacks.
        secure: process.env.NODE_ENV !== "development" // --> This ensures that the cookie is only sent over HTTPS.
    });

    return token;


}