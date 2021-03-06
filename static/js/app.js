// FUNCTION #1 of 4
function buildCharts(patientID) {
    d3.json("samples.json").then(data => {
        console.log(data)


        var bubbleData = [{
            x: [1, 2, 3, 4],
            y: [10, 11, 12, 13],
            mode: 'markers',
            marker: {
                size: [40, 60, 80, 100]
            }
        }];

        var bubbleLayout = {
            title: 'Marker Size',
            showlegend: false,
            height: 600,
            width: 600
        };

        Plotly.newPlot('bubbleDiv', bubbleData, bubbleLayout);


        // Plotly.newPlot("barDiv", barData, barLayout)
        // Plotly.newPlot("bubbleDiv", bubbleData, bubbleLayout)
        // Plotly.newPlot("gaugeDiv", guageData, bubbleLayout)
    })
};

// FUNCTION #2 of 4
function populateDemographicInfo(patientID) {

    var demographicInfoBox = d3.select("#sample-metadata");

    d3.json("samples.json").then(data => {
        console.log(data)
        // ADD APPROXIMATELY 3-6 LINE OF CODE
    })
}

// FUNCTION #3 of 4
function optionChanged(patientID) {
    console.log(patientID);
    buildCharts(patientID);
    populateDemographicInfo(patientID);
}

// FUNCTION #4 of 4
function initializeDashboard() {
    var dropdown = d3.select("#selDataset")
    d3.json("samples.json").then(data => {
        var patientIDs = data.names;
        patientIDs.forEach(patientID => {
            dropdown.append("option").text(patientID).property("value", patientID)
        })
        buildCharts(patientIDs[0]);
        populateDemoInfo(patientIDs[0]);
    });
};

initializeDashboard();