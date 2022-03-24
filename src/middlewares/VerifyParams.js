const VerifyParamsFetchLatest = async (req, res, next) => {
    const { query: { app_id, from } } = req;
    if (!app_id) {
        return res.status(400).send({ msg: 'Please specify the value of app_id' });
    } else if (!from) {
        return res.status(400).send({ msg: 'Please specify the value of cursor' });
    } else if (!from.match(/[0-9]+/gmi)) {
        return res.status(400).send({ msg: `value of 'from' must be a Unix timestamp` });
    } else {
        next();
    }

};

module.exports = {
    VerifyParamsFetchLatest
}