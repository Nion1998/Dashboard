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
            y: {
                beginAtZero: true
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
    options: {}
});