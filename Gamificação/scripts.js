// Plant data
const plants = [
    { name: 'Clotilde', score: 12, image: 'https://via.placeholder.com/100/green' },
    { name: 'Matilda', score: 22, image: 'https://via.placeholder.com/100/orange' },
    { name: 'Penelope', score: 50, image: 'https://via.placeholder.com/100/blue' },
  ];
  
  let currentPlantIndex = 0;
  
  // Update carousel image
  function updateCarousel() {
    const plantImage = document.getElementById('plantImage');
    plantImage.src = plants[currentPlantIndex].image;
  }
  
  // Navigate carousel
  function prevPlant() {
    currentPlantIndex = (currentPlantIndex - 1 + plants.length) % plants.length;
    updateCarousel();
    updateChart();
  }
  
  function nextPlant() {
    currentPlantIndex = (currentPlantIndex + 1) % plants.length;
    updateCarousel();
    updateChart();
  }
  
  // Initialize Chart.js
  const ctx = document.getElementById('scoreChart').getContext('2d');
  let scoreChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: plants.map(plant => plant.name),
      datasets: [{
        label: 'Pontuação',
        data: plants.map(plant => plant.score),
        backgroundColor: ['#434F42', '#434F42', '#434F42'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Update chart when carousel changes
  function updateChart() {
    scoreChart.data.datasets[0].data = plants.map(plant => plant.score);
    scoreChart.update();
  }
  
  // Initialize carousel
  updateCarousel();
  