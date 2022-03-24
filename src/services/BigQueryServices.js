const { BigQuery } = require('@google-cloud/bigquery');
const bq = new BigQuery();
const tableMap = require('../data/tableMap.json');

const getTable = function (id) {
    const regex = /(^[a-z]{2,3})([\.][a-z0-9]*)+$/gmi;
    if (!id.match(regex)) {
        const msg = `cannot parse app id: '${id}'. Check formatting and try again`;
        const err = new Error(msg);
        err.name = 'MalformedArgumentError';
        throw err;
    }
    const matches = tableMap.filter(elem => elem.id === id);
    const obj = matches[0];
    if (!obj) {
        const msg = `could not find a table for app id: '${id}'`;
        const err = new Error(msg);
        throw err;
    }
    const project = obj.project;
    const datasetId = obj.dataset;
    const tableId = obj.table;
    return `${project}.${datasetId}.${tableId}`
}

module.exports = {
    createQueryJobService(options) {
        const table = getTable(options.params.app_id);
        options.query = options.query.replace('@table', `\`${table}\``);
        return bq.createQueryJob(options)
    }
};