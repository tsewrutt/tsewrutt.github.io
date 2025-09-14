// Chart.js configuration for the dashboard
window.initializeChart = () => {
    const ctx = document.getElementById('deviceChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [{
                data: [45, 35, 20],
                backgroundColor: [
                    '#3B82F6',
                    '#10B981',
                    '#F59E0B'
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
};

// Initialize chart when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeChart, 100);
});

