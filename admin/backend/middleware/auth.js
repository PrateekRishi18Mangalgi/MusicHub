const { getAdmin } = require('../service/auth');

async function restrictToLoggedInUseOnly(req, res, next) {
    const token = req.cookies.token;

    if (!token) return res.redirect('/');

    const admin = await getAdmin(token);
    
    if (!admin) return res.redirect('/');
    req.admin = admin; 
    console.log("pass")
    next();
}

module.exports = {
    restrictToLoggedInUseOnly,
};

