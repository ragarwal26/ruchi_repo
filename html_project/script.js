const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 24, value: 2 },
  { minDegree: 25, maxDegree: 49, value: 1 },
  { minDegree: 50, maxDegree: 74, value: 6 },
  { minDegree: 75, maxDegree: 99, value: 5 },
  { minDegree: 100, maxDegree: 124, value: 4 },
  { minDegree: 125, maxDegree: 149, value: 3 },
  { minDegree: 150, maxDegree: 174, value: 7},
    { minDegree:175, maxDegree: 199, value: 8 },
  { minDegree: 200, maxDegree:224, value: 9 },
  { minDegree: 225, maxDegree: 249, value: 10 },
  { minDegree: 250, maxDegree: 274, value: 11 },
  { minDegree: 275, maxDegree: 299, value: 12},
  { minDegree: 300, maxDegree: 324, value: 13 },
   { minDegree: 325, maxDegree: 349, value: 14 },
   
  { minDegree: 350, maxDegree: 360, value: 2 }
];
//Size of each piece
const data = [6.8, 6.8, 6.8, 6.8, 6.8, 6.8,6.8,6.8,6.8,6.8,6.8,6.8,6.8,6.8,6.8];
//background color for eachpiece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ["Adnan", "Irene", "Amanda", "Austin", "Dan", "James","Jarondaki","Jessica","Katzi","Lucas","Sam","Ruchi","Sisi","Amy","Tricia"],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};
//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});