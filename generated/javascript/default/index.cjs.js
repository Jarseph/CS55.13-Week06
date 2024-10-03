const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'CS5513-Week06',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

