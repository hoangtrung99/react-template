import './dashboard.css'
import { Outlet } from '@tanstack/react-router'

export function DashboardLayout() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-content">
          {/* Logo */}
          <div className="sidebar-logo">
            <span>Logo</span>
          </div>

          {/* Navigation Menu */}
          <nav className="sidebar-nav">
            {/* Add your navigation items here */}
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <div className="footer-text">© 2024 Your Company</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
