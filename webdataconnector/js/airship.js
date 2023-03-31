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
            dataType: tableau.dataTypeEnum.float
        },{
            id: "totalOpens",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "androidSends",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "androidOpens",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "androidRate",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "iosSends",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "iosOpens",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "iosRate",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "webSends",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "webOpens",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "webRate",
            dataType: tableau.dataTypeEnum.float
        },{
            id: "webClicks",
            dataType: tableau.dataTypeEnum.float    
        },{
            id: "publishedTimestamp",
            dataType: tableau.dataTypeEnum.string    

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
                   "pushId": feat[i].pushId || "N/A",
                   "title": feat[i].title || "N/A",
                   "totalSends": feat[i].totalSends,
                   "totalOpens": feat[i].totalOpens,
                   "androidSends": feat[i].androidSends,
                   "androidOpens": feat[i].androidOpens,
                   "androidRate": feat[i].androidRate,
                   "iosSends": feat[i].iosSends,
                   "iosOpens": feat[i].iosOpens ,
                   "iosRate": feat[i].iosRate,
                   "webSends": feat[i].webSends,
                   "webOpens": feat[i].webOpens,
                   "webRate": feat[i].webRate,
                   "webClicks": feat[i].webClicks,
                   "publishedTimestamp": feat[i].publishedTimestamp || "N/A"

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
