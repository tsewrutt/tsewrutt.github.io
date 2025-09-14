# DataViz Dashboard - Blazor Server Application

A modern, real-time analytics dashboard built with ASP.NET Core Blazor Server, Entity Framework Core, and Chart.js.

## Features

- 📊 **Real-time Data Visualization** - Interactive charts and metrics
- 🎨 **Modern UI Design** - Glassmorphism effects and responsive layout
- 📱 **Mobile Responsive** - Works on all device sizes
- 🔄 **Live Data Updates** - Real-time data refresh capabilities
- 📈 **Multiple Chart Types** - Doughnut charts, metrics cards, and data tables

## Tech Stack

- **Backend**: ASP.NET Core 8.0, Blazor Server
- **Database**: SQL Server LocalDB with Entity Framework Core
- **Frontend**: Chart.js, Bootstrap, Custom CSS
- **Architecture**: Clean Architecture with Services Pattern

## Prerequisites

Before running this application, make sure you have:

1. **.NET 8.0 SDK** installed
   - Download from: https://dotnet.microsoft.com/download/dotnet/8.0
   - Verify installation: `dotnet --version`

2. **SQL Server LocalDB** (usually comes with Visual Studio)
   - Or SQL Server Express

## Getting Started

### 1. Install .NET SDK (if not already installed)
```bash
# Check if .NET is installed
dotnet --version

# If not installed, download from Microsoft's website
```

### 2. Navigate to Project Directory
```bash
cd my-app/DataVizDashboard
```

### 3. Restore Dependencies
```bash
dotnet restore
```

### 4. Create Database
```bash
dotnet ef database update
```

### 5. Run the Application
```bash
dotnet run
```

### 6. Open in Browser
Navigate to: `https://localhost:5001` or `http://localhost:5000`

## Project Structure

```
DataVizDashboard/
├── Data/
│   └── DashboardDbContext.cs          # Entity Framework context
├── Models/
│   └── DashboardModels.cs            # Data models
├── Services/
│   └── DataService.cs                # Business logic services
├── Pages/
│   ├── Index.razor                   # Main dashboard page
│   ├── Counter.razor                 # Sample counter page
│   └── FetchData.razor               # Sample data page
├── Shared/
│   ├── MainLayout.razor              # Main layout
│   └── NavMenu.razor                 # Navigation menu
├── wwwroot/
│   ├── css/
│   │   └── app.css                   # Custom styles
│   └── js/
│       └── charts.js                 # Chart.js configuration
└── Program.cs                        # Application entry point
```

## Features Explained

### Dashboard Components

1. **Metrics Cards**: Display key performance indicators
2. **Device Usage Chart**: Interactive doughnut chart showing device distribution
3. **Recent Metrics**: Live list of recent data points
4. **User Activity**: List of recent active users

### Data Models

- **MetricData**: Stores various metrics with timestamps
- **ChartData**: Chart-specific data with labels and values
- **User**: User information and activity tracking

### Services

- **IDataService**: Interface for data operations
- **DataService**: Implementation with Entity Framework
- **IDashboardService**: Service for seeding initial data

## Customization

### Adding New Metrics
1. Add new properties to `MetricData` model
2. Update `DataService.SeedDataAsync()` with sample data
3. Modify the dashboard UI in `Pages/Index.razor`

### Adding New Charts
1. Add chart configuration in `wwwroot/js/charts.js`
2. Create new chart container in the dashboard
3. Call chart initialization from Blazor component

### Styling
- Main styles: `wwwroot/css/app.css`
- Uses CSS Grid and Flexbox for responsive layout
- Glassmorphism effects with backdrop-filter

## Troubleshooting

### Database Issues
```bash
# If database doesn't exist, create it
dotnet ef database create

# If migrations are out of sync
dotnet ef database update
```

### Port Conflicts
If the default ports are in use:
```bash
dotnet run --urls "https://localhost:5002"
```

### Missing Dependencies
```bash
# Restore all packages
dotnet restore

# Clean and rebuild
dotnet clean
dotnet build
```

## Development Notes

- The application uses LocalDB by default
- Sample data is automatically seeded on first run
- Chart.js is loaded from CDN for simplicity
- All styling is custom CSS with modern design patterns

## Next Steps

- Add SignalR for real-time updates
- Implement user authentication
- Add more chart types
- Connect to real data sources
- Add export functionality

---

**Built with ❤️ using ASP.NET Core Blazor Server**

