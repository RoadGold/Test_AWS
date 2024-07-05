const checkOrigin = (req, res, next) => {
    const headerAuth = req.headers.authorization || '';
    //TODO Bearer 1111
    const token = headerAuth.split(' ').pop() //1111
    if(!token){
        res.status(405)
        res.send({error: "No autorizado"})
    } else {
        next();
    }
};

module.exports = {checkOrigin};