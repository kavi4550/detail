const ctx = document.getElementById('line-Chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [' ', 'February', 'March', 'April', ' '],
        datasets: [{
            label: 'Send',
            data: [1100,1300, 900, 1300,400],          
            backgroundColor:'transparent',
            borderColor:'skyblue',
            tension:0.7,
            borderWidth:3
        },
        {
            label: 'Open',
            data: [500,800, 300, 900,200],      
            backgroundColor:'transparent',
            borderColor:'pink',
            tension:0.7,
            borderWidth:3
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