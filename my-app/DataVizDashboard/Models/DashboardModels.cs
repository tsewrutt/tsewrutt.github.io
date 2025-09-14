namespace DataVizDashboard.Models;

public class MetricData
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public DateTime Timestamp { get; set; }
    public string Category { get; set; } = string.Empty;
}

public class ChartData
{
    public int Id { get; set; }
    public string Label { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public string Color { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime LastLogin { get; set; }
    public bool IsActive { get; set; }
}

public class DashboardViewModel
{
    public List<MetricData> Metrics { get; set; } = new();
    public List<ChartData> ChartData { get; set; } = new();
    public List<User> Users { get; set; } = new();
    public int TotalUsers { get; set; }
    public decimal TotalRevenue { get; set; }
    public int ActiveProjects { get; set; }
}

