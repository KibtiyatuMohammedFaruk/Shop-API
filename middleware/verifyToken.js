const jwt = require('jsonwebtoken')
 
// Verify user token
const verifyToken = (req, res, next) => {
   // Retrieve token from headers
   const bearerToken = req.headers.authorization;
 
   //Verify token if it exists and return an error if no token is found
   if(!bearerToken){
       return res.status(403).json({error: "User not authenticated"})
   }
 
   try {
      
       //Split token
       
 
       const token =  bearerToken.split[1];
 
       // verify if the token is correct
     const user = jwt.verify(token, "secret");
    
     // attach the verified user to the request (req)
     req.user = user;
   } catch (error) {
       // Verify token if it exists and return an error
       return res.status(403).json({error: "User not authenticated"})
   }
   next();
}
 
module.exports = { verifyToken }
