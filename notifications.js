// Notification System for ProManage

class NotificationSystem {
  constructor() {
    this.notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    this.init();
  }

  init() {
    // Create notification container if it doesn't exist
    if (!document.getElementById('notificationContainer')) {
      const container = document.createElement('div');
      container.id = 'notificationContainer';
      container.className = 'position-fixed';
      container.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 350px;';
      document.body.appendChild(container);
    }
  }

  // Add a new notification
  addNotification(type, title, message, duration = 5000) {
    const notification = {
      id: Date.now(),
      type, // 'success', 'error', 'warning', 'info'
      title,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };

    this.notifications.unshift(notification);
    this.saveNotifications();
    this.showNotification(notification);
  }

  // Show notification in UI
  showNotification(notification) {
    const container = document.getElementById('notificationContainer');
    const notificationEl = document.createElement('div');
    
    const typeClasses = {
      'success': 'alert-success',
      'error': 'alert-danger',
      'warning': 'alert-warning',
      'info': 'alert-info'
    };

    const typeIcons = {
      'success': 'fas fa-check-circle',
      'error': 'fas fa-exclamation-circle',
      'warning': 'fas fa-exclamation-triangle',
      'info': 'fas fa-info-circle'
    };

    notificationEl.className = `alert ${typeClasses[notification.type]} alert-dismissible fade show mb-2`;
    notificationEl.innerHTML = `
      <div class="d-flex align-items-start">
        <i class="${typeIcons[notification.type]} me-2 mt-1"></i>
        <div class="flex-grow-1">
          <h6 class="alert-heading mb-1">${notification.title}</h6>
          <p class="mb-0 small">${notification.message}</p>
        </div>
        <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
      </div>
    `;

    container.appendChild(notificationEl);

    // Auto remove after duration
    setTimeout(() => {
      if (notificationEl.parentNode) {
        notificationEl.remove();
      }
    }, notification.duration || 5000);
  }

  // Get all notifications
  getNotifications() {
    return this.notifications;
  }

  // Get unread notifications
  getUnreadNotifications() {
    return this.notifications.filter(n => !n.read);
  }

  // Mark notification as read
  markAsRead(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.saveNotifications();
    }
  }

  // Mark all as read
  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
    this.saveNotifications();
  }

  // Clear all notifications
  clearAll() {
    this.notifications = [];
    this.saveNotifications();
  }

  // Save notifications to localStorage
  saveNotifications() {
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
  }

  // Get notification count for navbar
  getNotificationCount() {
    return this.getUnreadNotifications().length;
  }

  // Show notification count in navbar
  updateNotificationBadge() {
    const count = this.getNotificationCount();
    let badge = document.getElementById('notificationBadge');
    
    if (!badge) {
      // Create badge if it doesn't exist
      const navbar = document.querySelector('.navbar .container');
      if (navbar) {
        const notificationBtn = document.createElement('button');
        notificationBtn.className = 'btn btn-outline-primary btn-sm position-relative';
        notificationBtn.innerHTML = `
          <i class="fas fa-bell me-1"></i>Notifications
          <span id="notificationBadge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        `;
        notificationBtn.onclick = () => this.showNotificationPanel();
        navbar.appendChild(notificationBtn);
        badge = document.getElementById('notificationBadge');
      }
    }
    
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline' : 'none';
    }
  }

  // Show notification panel
  showNotificationPanel() {
    // Remove existing panel
    const existingPanel = document.getElementById('notificationPanel');
    if (existingPanel) {
      existingPanel.remove();
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'notificationPanel';
    panel.className = 'position-fixed';
    panel.style.cssText = 'top: 70px; right: 20px; z-index: 9998; width: 350px; max-height: 500px; overflow-y: auto;';
    
    const notifications = this.getNotifications();
    
    panel.innerHTML = `
      <div class="card shadow-lg">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="mb-0">Notifications</h6>
          <div>
            <button class="btn btn-sm btn-outline-secondary me-2" onclick="notificationSystem.markAllAsRead()">
              Mark All Read
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="notificationSystem.clearAll()">
              Clear All
            </button>
          </div>
        </div>
        <div class="card-body p-0">
          ${notifications.length === 0 ? `
            <div class="text-center py-4">
              <i class="fas fa-bell-slash fa-2x text-muted mb-2"></i>
              <p class="text-muted mb-0">No notifications</p>
            </div>
          ` : notifications.map(n => `
            <div class="list-group-item ${!n.read ? 'bg-light' : ''}" onclick="notificationSystem.markAsRead(${n.id})">
              <div class="d-flex align-items-start">
                <i class="fas fa-${n.type === 'success' ? 'check-circle text-success' : 
                  n.type === 'error' ? 'exclamation-circle text-danger' : 
                  n.type === 'warning' ? 'exclamation-triangle text-warning' : 
                  'info-circle text-info'} me-2 mt-1"></i>
                <div class="flex-grow-1">
                  <h6 class="mb-1">${n.title}</h6>
                  <p class="mb-1 small">${n.message}</p>
                  <small class="text-muted">${new Date(n.timestamp).toLocaleString()}</small>
                </div>
                ${!n.read ? '<span class="badge bg-primary">New</span>' : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    
    // Close panel when clicking outside
    setTimeout(() => {
      document.addEventListener('click', function closePanel(e) {
        if (!panel.contains(e.target) && !e.target.closest('[onclick*="showNotificationPanel"]')) {
          panel.remove();
          document.removeEventListener('click', closePanel);
        }
      });
    }, 100);
  }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Auto-update notification badge
setInterval(() => {
  notificationSystem.updateNotificationBadge();
}, 1000);

// Notification triggers for different actions
function triggerProjectNotification(projectName, action) {
  const messages = {
    'created': `Project "${projectName}" has been created successfully.`,
    'updated': `Project "${projectName}" has been updated.`,
    'completed': `Project "${projectName}" has been completed!`,
    'assigned': `You have been assigned to project "${projectName}".`
  };

  notificationSystem.addNotification(
    action === 'completed' ? 'success' : 'info',
    'Project Update',
    messages[action] || `Project "${projectName}" ${action}.`,
    7000
  );
}

function triggerTaskNotification(taskTitle, action, projectName) {
  const messages = {
    'created': `New task "${taskTitle}" has been created in project "${projectName}".`,
    'assigned': `You have been assigned to task "${taskTitle}" in project "${projectName}".`,
    'completed': `Task "${taskTitle}" has been completed!`,
    'updated': `Task "${taskTitle}" has been updated.`,
    'status_changed': `Task "${taskTitle}" status has been changed.`
  };

  notificationSystem.addNotification(
    action === 'completed' ? 'success' : action === 'assigned' ? 'info' : 'info',
    'Task Update',
    messages[action] || `Task "${taskTitle}" ${action}.`,
    6000
  );
}

function triggerBugNotification(bugTitle, action, projectName) {
  const messages = {
    'reported': `New bug "${bugTitle}" has been reported in project "${projectName}".`,
    'assigned': `Bug "${bugTitle}" has been assigned to you.`,
    'resolved': `Bug "${bugTitle}" has been resolved!`,
    'updated': `Bug "${bugTitle}" has been updated.`
  };

  notificationSystem.addNotification(
    action === 'resolved' ? 'success' : action === 'reported' ? 'warning' : 'info',
    'Bug Report',
    messages[action] || `Bug "${bugTitle}" ${action}.`,
    6000
  );
}

function triggerSprintNotification(sprintName, action, projectName) {
  const messages = {
    'created': `New sprint "${sprintName}" has been created for project "${projectName}".`,
    'started': `Sprint "${sprintName}" has started!`,
    'completed': `Sprint "${sprintName}" has been completed!`
  };

  notificationSystem.addNotification(
    action === 'completed' || action === 'started' ? 'success' : 'info',
    'Sprint Update',
    messages[action] || `Sprint "${sprintName}" ${action}.`,
    6000
  );
}

function triggerTimeLogNotification(hours, taskTitle) {
  notificationSystem.addNotification(
    'success',
    'Time Logged',
    `You have logged ${hours} hours for task "${taskTitle}".`,
    5000
  );
}

// Export for use in other files
window.notificationSystem = notificationSystem;
window.triggerProjectNotification = triggerProjectNotification;
window.triggerTaskNotification = triggerTaskNotification;
window.triggerBugNotification = triggerBugNotification;
window.triggerSprintNotification = triggerSprintNotification;
window.triggerTimeLogNotification = triggerTimeLogNotification;
