using DataVizDashboard.Data;
using DataVizDashboard.Models;
using Microsoft.EntityFrameworkCore;

namespace DataVizDashboard.Services;

public interface IDataService
{
    Task<List<MetricData>> GetMetricsAsync();
    Task<List<ChartData>> GetChartDataAsync();
    Task<List<User>> GetUsersAsync();
    Task<DashboardViewModel> GetDashboardDataAsync();
}

public class DataService : IDataService
{
    private readonly DashboardDbContext _context;

    public DataService(DashboardDbContext context)
    {
        _context = context;
    }

    public async Task<List<MetricData>> GetMetricsAsync()
    {
        return await _context.Metrics
            .OrderByDescending(m => m.Timestamp)
            .Take(10)
            .ToListAsync();
    }

    public async Task<List<ChartData>> GetChartDataAsync()
    {
        return await _context.ChartData
            .OrderBy(c => c.CreatedAt)
            .ToListAsync();
    }

    public async Task<List<User>> GetUsersAsync()
    {
        return await _context.Users
            .Where(u => u.IsActive)
            .OrderByDescending(u => u.LastLogin)
            .Take(5)
            .ToListAsync();
    }

    public async Task<DashboardViewModel> GetDashboardDataAsync()
    {
        var metrics = await GetMetricsAsync();
        var chartData = await GetChartDataAsync();
        var users = await GetUsersAsync();

        return new DashboardViewModel
        {
            Metrics = metrics,
            ChartData = chartData,
            Users = users,
            TotalUsers = await _context.Users.CountAsync(u => u.IsActive),
            TotalRevenue = await _context.Metrics
                .Where(m => m.Category == "Revenue")
                .SumAsync(m => m.Value),
            ActiveProjects = await _context.Metrics
                .Where(m => m.Category == "Projects")
                .CountAsync()
        };
    }
}

public interface IDashboardService
{
    Task SeedDataAsync();
}

public class DashboardService : IDashboardService
{
    private readonly DashboardDbContext _context;

    public DashboardService(DashboardDbContext context)
    {
        _context = context;
    }

    public async Task SeedDataAsync()
    {
        if (!await _context.Metrics.AnyAsync())
        {
            var metrics = new List<MetricData>
            {
                new() { Name = "Revenue", Value = 125000, Timestamp = DateTime.Now.AddDays(-1), Category = "Revenue" },
                new() { Name = "Users", Value = 1250, Timestamp = DateTime.Now.AddDays(-1), Category = "Users" },
                new() { Name = "Orders", Value = 89, Timestamp = DateTime.Now.AddDays(-1), Category = "Orders" },
                new() { Name = "Revenue", Value = 135000, Timestamp = DateTime.Now, Category = "Revenue" },
                new() { Name = "Users", Value = 1300, Timestamp = DateTime.Now, Category = "Users" },
                new() { Name = "Orders", Value = 95, Timestamp = DateTime.Now, Category = "Orders" }
            };

            await _context.Metrics.AddRangeAsync(metrics);
        }

        if (!await _context.ChartData.AnyAsync())
        {
            var chartData = new List<ChartData>
            {
                new() { Label = "Desktop", Value = 45, Color = "#3B82F6", CreatedAt = DateTime.Now.AddDays(-6) },
                new() { Label = "Mobile", Value = 35, Color = "#10B981", CreatedAt = DateTime.Now.AddDays(-5) },
                new() { Label = "Tablet", Value = 20, Color = "#F59E0B", CreatedAt = DateTime.Now.AddDays(-4) }
            };

            await _context.ChartData.AddRangeAsync(chartData);
        }

        if (!await _context.Users.AnyAsync())
        {
            var users = new List<User>
            {
                new() { Name = "John Doe", Email = "john@example.com", LastLogin = DateTime.Now.AddHours(-2), IsActive = true },
                new() { Name = "Jane Smith", Email = "jane@example.com", LastLogin = DateTime.Now.AddHours(-5), IsActive = true },
                new() { Name = "Bob Johnson", Email = "bob@example.com", LastLogin = DateTime.Now.AddDays(-1), IsActive = true },
                new() { Name = "Alice Brown", Email = "alice@example.com", LastLogin = DateTime.Now.AddDays(-2), IsActive = true },
                new() { Name = "Charlie Wilson", Email = "charlie@example.com", LastLogin = DateTime.Now.AddDays(-3), IsActive = true }
            };

            await _context.Users.AddRangeAsync(users);
        }

        await _context.SaveChangesAsync();
    }
}

