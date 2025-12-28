# Job Application Component Setup

## 📦 Installation

1. **Install Framer Motion** (if not already installed):
```bash
npm install framer-motion
```

2. **Copy the component files** to your project:
- `JobApplication.jsx` → your components folder
- `JobApplication.css` → same folder as the component

## 🚀 Usage

### Basic Import and Use:
```jsx
import JobApplication from './components/JobApplication';

function App() {
  return (
    <div>
      <JobApplication />
    </div>
  );
}
```

### With React Router:
```jsx
import { Route } from 'react-router-dom';
import JobApplication from './components/JobApplication';

// Add to your routes
<Route path="/careers" component={JobApplication} />
```

## ⚙️ Customization

### 1. **Change Job Roles**
Edit the `JOB_ROLES` array in `JobApplication.jsx`:
```jsx
const JOB_ROLES = [
  'Your Custom Role 1',
  'Your Custom Role 2',
  'Your Custom Role 3',
  // Add or remove roles as needed
];
```

### 2. **Replace Background Image**
In `JobApplication.css`, update the background URL:
```css
.job-application__background {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%),
              url('YOUR_IMAGE_URL_HERE') center/cover;
}
```

### 3. **Change HR Email**
In `JobApplication.jsx`, update the email address:
```jsx
return `mailto:your-hr@yourcompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

### 4. **Customize Colors**
Update CSS variables or colors in `JobApplication.css`:
- Primary gradient: `#6366f1` to `#a855f7`
- Text colors: `#1e293b`, `#64748b`
- Border colors: `#e2e8f0`

## 🎨 Features Included

✅ **Animations**: Smooth Framer Motion animations throughout
✅ **Responsive**: Works on mobile, tablet, and desktop
✅ **Form Validation**: Required field validation
✅ **Email Integration**: Opens user's email client with pre-filled details
✅ **Professional Design**: Premium SaaS-style UI
✅ **Accessible**: Keyboard navigation and screen reader friendly

## 🔧 Dependencies

- React 16.8+ (hooks support)
- Framer Motion 6+
- Modern browser with CSS Grid support

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🎯 Component Structure

```
JobApplication/
├── JobApplication.jsx    # Main component
├── JobApplication.css    # Styles
└── README.md            # This file
```

The component is completely self-contained and doesn't require any external routing or state management setup.