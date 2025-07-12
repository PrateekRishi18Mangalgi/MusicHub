const { json } = require('express');
const jwt = require('jsonwebtoken');
 const secret = "E-com";

function setAdmin(admin){
    return jwt.sign(
        {
        _id: admin._id,
        email: admin.email,
    }, 
    secret,
);
}
function getAdmin(id){
    return jwt.verify(id, secret);
}
module.exports = {
    setAdmin,
    getAdmin,
}





