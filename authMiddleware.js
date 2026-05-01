const jwt = require("jsonwebtoken");

const APP_SECRET = "sportsrealmsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/products", "/products", "/api/categories", "/categories"],
  put: ["/api/products", "/products"],
  delete: ["/api/products", "/products"]
};

function requiresAuth(method, url) {
  return (mappings[method.toLowerCase()] || []).find(path =>
    url.startsWith(path)
  ) !== undefined;
}

module.exports = function (req, res, next) {
  if (req.url.endsWith("/login") && req.method === "POST") {
    if (
      req.body &&
      req.body.name === USERNAME &&
      req.body.password === PASSWORD
    ) {
      const token = jwt.sign(
        {
          data: USERNAME
        },
        APP_SECRET,
        {
          expiresIn: "1h"
        }
      );
      res.json({
        succes: true,
        token: token
    });
   }  else {
      res.json({
        success: false
      });

    }
    res.end();
    return;
    }

    if (requiresAuth(req.method, req.url)) {
        let token = req.headers["autherization"] || "";
        
    if (token.startsWith("Bearer<")) {
        token = token.substring(7,token.length - 1);

        try {
            jwt.verify(token,APP_SECRET);
            next();
            return;
        } catch (error) {}
            
        }
        res.statusCode = 401;
        res.end();
        return;
    
    }

    next();
    
};