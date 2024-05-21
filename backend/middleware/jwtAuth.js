// const JWT = require("jsonwebtoken");

// // router level middleware function
// const jwtAuth = (req, res, next) => {
//   // get cookie token(jwt token generated using json.sign()) form the request
//   const token = (req.cookies && req.cookies.token) || null;

//   // return response if there is no token(jwt token attached with cookie)
//   if (!token) {
//     return res.status(400).json({ success: false, message: "NOT authorized" });
//   }

//   // verify the token
//   try {
//     const payload = JWT.verify(token, process.env.SECRET);
//     req.user = { id: payload.id, email: payload.email };
//   } catch (error) {
//     return res.status(400).json({ success: false, message: error.message });
//   }
//   next();
// };

// module.exports = jwtAuth;


const JWT = require('jsonwebtoken')

// Router-level middleware function
const jwtAuth = (req, res, next) => {
  let token

  // Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('SECRET ')
  ) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies && req.cookies.token) {
    // Check cookies
    token = req.cookies.token
  }

  // Return response if there is no token
  if (!token) {
    return res.status(400).json({ success: false, message: 'NOT authorized' })
  }

  // Verify the token
  try {
    const payload = JWT.verify(token, process.env.SECRET)
    req.user = { id: payload.id, email: payload.email }
    next()
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

module.exports = jwtAuth