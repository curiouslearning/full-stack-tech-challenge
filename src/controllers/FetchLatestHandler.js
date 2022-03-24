const config = require('../config.json');
const { createQueryJobService } = require('../services/BigQueryServices');

module.exports = {
    async fetchLatestHandler(req, res) {
        const { query: { app_id, from } } = req;
        console.log(app_id, from, 'query-->')
        const { fetchLatestQuery: { string: sqlQueryString, loc } } = config;

        const options = {
            query: sqlQueryString,
            location: loc,
            params: {
                app_id: app_id,
                cursor: Number(from),
            },
        };

        try {
            const rows = await createQueryJobService(options).then((data) => {
                if (data) {
                    return data.shift().getQueryResults(data.shift()).then((result) => {
                        return result.shift();
                    }).catch((err) => {
                        throw err;
                    });
                } else {
                    throw new Error('error creating the query job')
                }
            }).catch((err) => { throw err; });
            return res.status(200).json(rows).send();
        } catch (e) {
            console.log(e);
            if (e.name === 'MalformedArgumentError') {
                return res.status(400).send({
                    msg: 'error in one or more arguments',
                    err: e,
                });
            }
            return res.status(500).send({
                msg: 'The data could not be fetched',
                err: e,
            });
        }
    }
};
