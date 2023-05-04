var ham = document.querySelector(".side_open");
ham.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("active")
})
var ham = document.querySelector(".side_close");
ham.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("active")
})




const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 38, 35, 20, 30, 50, 30, 25, 40, 45, 36],
            borderWidth: 1,
            backgroundColor: '#1D2F43',
            barPercentage: .2
        }]
    },
    options: {
        
        scales: {
            x:{
                grid:{
                    drawOnChartArea:false
                }
            },
            
        },
        plugins:{
            legend: {
              display: false
            }
            
        }

        
    }
});
const ctpx = document.getElementById('mypolor');

new Chart(ctpx, {
    type: 'polarArea',
    data: {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 92, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {
        scales: {
           
        }
    }
});
const ctlx = document.getElementById('myline');

new Chart(ctlx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'My First Dataset',
          data: [0, 10, 30, 20, 40, 55, 64,40,75,80,95,75,100],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          
        }]
    },
    options: {

        scales:{
            x:{
                grid:{
                    drawOnChartArea:false
                }
            },
            y:{
                grid:{
                    drawOnChartArea:false
                }
            },
             y: {
                display: false // Hide Y axis labels
            },
            x: {
                display: false // Hide X axis labels
            }
        },
        plugins:{
            legend: {
              display: false
            }
            
        }
        
    }
    
});


const ctxh = document.getElementById('myCharth');
new Chart(ctxh, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 38, 35, 20, 30, 50],
            borderWidth: 1,
            backgroundColor: '#1D2F43',
            barPercentage: .2
        }]
    },
    options: {
        
        scales:{
            x:{
                grid:{
                    drawOnChartArea:false
                }
            },
            y:{
                grid:{
                    drawOnChartArea:false
                }
            },
             y: {
                display: false // Hide Y axis labels
            },
            x: {
                display: false // Hide X axis labels
            }
        },
        plugins:{
            legend: {
              display: false
            }
            
        }
            
        }
    }
);

//map
$('#chartDiv').JSC({
    mapping: {
      referenceLayers: 'World',
      projection: false
    },
    type: 'map',
    height: 330,
    legendVisible: false,
    chartArea: {
      fill: '#FFFFFF'
    },
    defaultPointOutlineWidth: 0,
    series: [{
      defaultPoint: {
        color: 'rgba(245,106,13,0.97)'
      },
      map: 'Continent:North America'
    }, {
      defaultPoint: {
        color: 'rgba(254,210,29,0.97)'
      },
      map: 'Continent:South America'
    }, {
      defaultPoint: {
        color: 'rgba(126,177,27,0.97)'
      },
      map: 'Continent:Europe'
    }, {
      defaultPoint: {
        color: 'rgba(61,55,108,0.97)'
      },
      map: 'Continent:Asia'
    }, {
      defaultPoint: {
        color: 'rgba(50,96,182,0.97)'
      },
      map: 'Continent:Africa'
    }, {
      defaultPoint: {
        color: 'rgba(52,130,114,0.97)'
      },
      map: 'Continent:Oceania'
    }],
    toolbarVisible: false
  
  })



  //Crud oparetion start 

   

  // crud oparetion end