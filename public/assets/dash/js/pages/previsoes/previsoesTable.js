const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Entradas',
            data: [65, 59, 80, 81, 56, 55, 40, 57, 14, 35, 43, 56],
            fill: false,
            borderColor: '#77ff31',
            tension: 0.1,
          },
          {
            label: 'Saídas',
            data: [5, 35, 10, 14, 40, 35, 75, 40, 89, 65, 35, 27],
            fill: false,
            borderColor: '#ee3939',
            tension: 0.1,
          },
          {
            label: 'Caixa',
            data: [60, 30, -10, 14, 16, 20, 78, 61, 31, 10, 26, 49],
            fill: false,
            borderColor: '#66b7e7',
            tension: 0.1,
          },
        ],
      };
      
      const config = {
        type: 'line',
        data: data,
      };
    
      var myChart = new Chart(document.getElementById('myChart'), config);