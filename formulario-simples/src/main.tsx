import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'

// Import Metro UI CSS
import 'metro4/dist/css/metro-all.min.css'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUser, 
  faLock, 
  faSignInAlt, 
  faStar, 
  faSmile, 
  faFrown, 
  faMeh,
  faBox,
  faHeadset,
  faTruck,
  faDollarSign,
  faComment,
  faThumbsUp,
  faThumbsDown,
  faCheckCircle,
  faHeart,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faUser, 
  faLock, 
  faSignInAlt, 
  faStar, 
  faSmile, 
  faFrown, 
  faMeh,
  faBox,
  faHeadset,
  faTruck,
  faDollarSign,
  faComment,
  faThumbsUp,
  faThumbsDown,
  faCheckCircle,
  faHeart,
  faSignOutAlt,
  faChevronLeft,
  faChevronRight,
  faSpinner
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 