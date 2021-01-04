const fs = require('fs');

// Convert JSON report to JSONP
(async () => {
  try {
    let jsonReport = await fs.promises.readFile('./backstop_data/json_report/jsonReport.json', { encoding: 'utf8' });
    let jsonpReport = `report(${jsonReport});`;

    fs.promises.writeFile('config.js', jsonpReport).then(() => {
      console.log('Copied JSONP report');
    }).catch((err) => {
      console.error('Failed JSONP report copy');
      throw (err);
    });

  } catch (error) {
    console.log(error)
  }
})();