(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "pushId",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "title",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "totalSends",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "totalOpens",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "androidSends",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "androidOpens",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "androidRate",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "iosSends",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "iosOpens",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "iosRate",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "webSends",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "webOpens",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "webRate",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "webClicks",
            dataType: tableau.dataTypeEnum.numeric
        },{
            id: "publishedTimestamp",
            dataType: tableau.dataTypeEnum.datetime
         }];

        var tableSchema = {
            id: "AirshipPushMetrics",
            alias: "Airship Push Metrics",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://29nowmxx0h.execute-api.us-east-1.amazonaws.com/release/push-metrics", function(resp) {
            var feat = resp.metrics,
                tableData = [];
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                   "pushId": feat[i].pushId || "hello",
                   "title": feat[i].title || "hello",
                   "totalSends": feat[i].totalSends || 0,
                   "totalOpens": feat[i].totalOpens || 0,
                   "androidSends": feat[i].androidSends || 0,
                   "androidOpens": feat[i].androidOpens || 0,
                   "androidRate": feat[i].androidRate || 0,
                   "iosSends": feat[i].iosSends || 0,
                   "iosOpens": feat[i].iosOpens || 0,
                   "iosRate": feat[i].iosRate || 0,
                   "webSends": feat[i].webSends || 0,
                   "webOpens": feat[i].webOpens || 0,
                   "webRate": feat[i].webRate || 0,
                   "webClicks": feat[i].webClicks || 0,
                   "publishedTimestamp": feat[i].publishedTimestamp || "2023-03-20T22:38:24+00:00"
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });

    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Airship Push Metrics"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
