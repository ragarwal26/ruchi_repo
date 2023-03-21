(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "x",
            dataType: tableau.dataTypeEnum.float
         }, {
            id: "y",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "rating",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "fearandgreedsea",
            alias: "Fear & Greed Data",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://production.dataviz.cnn.io/index/fearandgreed/graphdata", function(resp) {
            var feat = resp.fear_and_greed_historical.data,
                tableData = [];
            // Iterate over the JSON object
            for (let [key, value] of Object.entries(feat)) {
             console.log(key, value);
             tableData.push({
              "score":feat.score,
             "x":feat.data.x,
              "y":feat.data.y,
              "rating":feat.data.rating,
             "timestamp":new Date(feat.timestamp)
             
                
            //for (var i = 0, len = feat.length; i < len; i++) {
                //tableData.push({
                  // "score": feat.score, 
                //   "rating": feat.rating, 
                  // "previous_close": feat.previous_close,
                  // "timestamp": new Date(feat.timestamp)
                });
          //  }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Fear and Greed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
