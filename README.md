# E-Healthcare Fitness Platform

A comprehensive full-stack web application that integrates healthcare services, doctor appointments, fitness course management, and wellness blogging into a unified platform. This application leverages modern web technologies to provide users with accessible healthcare information, expert guidance, and fitness resources.

---

## 🎯 Project Overview

E-Healthcare Fitness is a feature-rich platform designed to bridge the gap between healthcare professionals and fitness enthusiasts. The application provides a seamless experience for:
- **Users**: Access healthcare information, enroll in fitness courses, book doctor appointments, and track personal progress
- **Healthcare Providers**: Manage profiles, appointments, and consultations
- **Instructors**: Create and manage fitness courses with structured content
- **Admins**: Manage users, categories, payments, and platform content

---

## 🚀 Key Features

### User Authentication & Authorization
- User registration with email verification (OTP-based)
- Secure login with JWT authentication
- Role-based access control (Student, Instructor, Admin, Doctor)
- Password management and reset functionality

### Healthcare Services
- **Doctor Profiles**: Browse and view detailed doctor information
- **Appointment Management**: Schedule, manage, and track doctor appointments
- **Availability Management**: Automated scheduling with timezone support

### Fitness Courses
- **Course Catalog**: Browse courses by categories
- **Structured Content**: Courses with sections and subsections
- **Video Learning**: Integrated video player for course content
- **Progress Tracking**: Real-time tracking of course completion
- **Ratings & Reviews**: Community feedback system with star ratings

### Blog Platform
- Create and publish health and fitness blogs
- Comment system for community engagement
- Rich markdown support for content creation

### Payment Integration
- **Razorpay Integration**: Secure payment processing for course enrollment
- **Order Management**: Track purchase history and payment status
- **Email Confirmations**: Automated payment success notifications

### User Dashboard
- **Profile Management**: Update personal and professional information
- **Enrollment History**: View all enrolled courses
- **Progress Analytics**: Visual representation of learning progress
- **Appointment Calendar**: View upcoming consultations

### Additional Features
- Contact form with email notifications
- Responsive design optimized for all devices
- Real-time notifications with React Hot Toast
- Image upload with Cloudinary CDN
- Email notifications for critical events

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18.3.1** | UI library for building interactive interfaces |
| **Redux Toolkit** | State management for complex application state |
| **React Router v6** | Client-side routing and navigation |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Axios** | HTTP client for API communication |
| **React Hook Form** | Efficient form handling and validation |
| **Chart.js** | Data visualization for analytics and progress |
| **Video React** | Video player component for course content |
| **Swiper** | Carousel and slider functionality |
| **React Icons** | Comprehensive icon library |
| **React OTP Input** | OTP input component for email verification |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Express.js** | Node.js web framework for APIs |
| **MongoDB & Mongoose** | NoSQL database with ODM |
| **JWT** | Secure token-based authentication |
| **bcryptjs** | Password hashing and encryption |
| **Cloudinary** | Cloud-based image storage and CDN |
| **Razorpay** | Payment gateway integration |
| **Nodemailer** | Email sending for notifications and verification |
| **OTP Generator** | Secure OTP generation for email verification |
| **Node Schedule** | Background job scheduling |
| **CORS & Cookie Parser** | Cross-origin resource sharing and cookie management |

---

## 📊 Architecture & Database Schema

### Core Models
- **User**: Stores user account information and authentication details
- **Profile**: Extended user profile with bio, contact, and preferences
- **Category**: Course categories for organization
- **Course**: Course information with instructor association
- **Section**: Organized course content structure
- **Subsection**: Individual lessons/modules with video content
- **CourseProgress**: Tracks user progress through courses
- **CourseRatingAndReview**: User feedback and ratings
- **Doctor**: Healthcare provider profiles
- **Appointments**: Booking and management of doctor consultations
- **BlogPost**: User-generated blog content
- **Comment**: Comments on blog posts
- **OTP**: Temporary OTP storage for email verification
- **Order/Payment**: Transaction and enrollment records

---

## 📈 Project Impact

### For Users
- **Accessibility**: 24/7 access to healthcare information and learning resources
- **Convenience**: Schedule doctor appointments from home
- **Personalized Learning**: Track progress and learn at your own pace
- **Expert Guidance**: Learn from certified instructors and healthcare professionals
- **Cost-Effective**: Affordable access to premium fitness and health content

### For Healthcare Professionals
- **Wider Reach**: Connect with more patients and students
- **Digital Presence**: Build professional profiles and reputation
- **Appointment Management**: Streamlined scheduling system
- **Communication**: Direct engagement with patients

### For the Platform
- **Scalability**: Built to handle growing user base and content
- **Monetization**: Secure payment integration and subscription model
- **Community**: Foster engagement through reviews, ratings, and blog platform
- **Analytics**: Track user engagement and course effectiveness

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14.x or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance via MongoDB Atlas)
- **Git** for version control
- **Cloudinary Account** (for image uploads)
- **Razorpay Account** (for payment processing)
- **Gmail Account** (for email notifications via Nodemailer)

### Environment Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/E-Healthcare-Fitness.git
cd E-Healthcare-Fitness
```

#### 2. Backend Configuration

Navigate to the server directory:
```bash
cd server
```

Create a `.env` file in the server root directory with the following variables:
```env
# Database Configuration
MONGO_DB_URL=your_mongodb_connection_string
DATABASE_NAME=your_database_name

# Server Configuration
PORT=4000

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
COOKIE_TIME=7

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration (Nodemailer)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_specific_password

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

**Important**: For Gmail SMTP, use an [App-specific password](https://support.google.com/accounts/answer/185833), not your regular password.

Install dependencies:
```bash
npm install
```

#### 3. Frontend Configuration

Navigate to the client directory:
```bash
cd ../client
```

Create a `.env` file in the client root directory:
```env
# Backend API Configuration
REACT_APP_BASE_URL=http://localhost:4000/api
```

Install dependencies:
```bash
npm install
```

---

## 🚀 Running the Application

### Option 1: Run Both Client & Server Concurrently (Recommended)

From the **client** directory, run:
```bash
npm run dev
```

This command starts both the frontend (React on port 3000) and backend (Express on port 4000) simultaneously using `concurrently`.

### Option 2: Run Separately

**Terminal 1 - Backend Server**
```bash
cd server
npm run dev
```
The backend will start on `http://localhost:4000`

**Terminal 2 - Frontend Client**
```bash
cd client
npm start
```
The frontend will start on `http://localhost:3000`

### Production Build

Build the frontend for production:
```bash
cd client
npm run build
```

---

## 📁 Project Structure

```
E-Healthcare-Fitness/
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── common/              # Shared components (Nav, Footer, etc.)
│   │   │   └── core/                # Feature components
│   │   ├── pages/                   # Page components
│   │   ├── services/                # API integration
│   │   │   └── operations/          # API operations
│   │   ├── slices/                  # Redux slices
│   │   ├── utils/                   # Utility functions
│   │   ├── hooks/                   # Custom React hooks
│   │   └── data/                    # Static data and constants
│   ├── package.json
│   └── tailwind.config.js           # Tailwind configuration
│
└── server/                          # Express Backend
    ├── config/                      # Database, Cloudinary, Razorpay config
    ├── controllers/                 # Request handlers
    ├── models/                      # MongoDB schemas
    ├── routes/                      # API endpoints
    ├── middleware/                  # Express middleware (auth, etc.)
    ├── mail/                        # Email templates
    ├── utils/                       # Helper utilities
    ├── index.js                     # Server entry point
    └── package.json
```

---

## 🔗 API Endpoints Overview

### Authentication Routes (`/api/auth`)
- `POST /signup` - User registration
- `POST /login` - User login
- `POST /send-otp` - Send OTP for email verification
- `POST /verify-otp` - Verify OTP
- `POST /change-password` - Change user password

### Course Routes (`/api/courses`)
- `GET /` - Get all courses
- `GET /:id` - Get course details
- `POST /` - Create new course (Instructor only)
- `PUT /:id` - Update course (Instructor only)
- `DELETE /:id` - Delete course (Instructor only)

### Doctor Routes (`/api/doctors`)
- `GET /` - Get all doctors
- `GET /:id` - Get doctor profile
- `POST /appointments` - Book appointment
- `GET /appointments` - Get user appointments

### Blog Routes (`/api/blogs`)
- `GET /` - Get all blog posts
- `POST /` - Create blog post
- `GET /:id` - Get blog details
- `POST /:id/comments` - Add comment

### Payment Routes (`/api/payments`)
- `POST /initiate` - Initiate payment
- `POST /verify` - Verify payment
- `GET /enrollment-status` - Check enrollment

### User Routes (`/api/users`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update profile
- `GET /dashboard` - Get dashboard data

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **OTP Verification**: Additional security for email verification
- **CORS Protection**: Restricted cross-origin requests
- **HTTP-only Cookies**: Secure cookie storage with authentication tokens
- **Input Validation**: Server-side validation for all inputs
- **Secure Payment**: Razorpay integration with PCI compliance

---

## 🧪 Testing

Run tests for the React frontend:
```bash
npm test
```

---

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Tablets (iPad, Android tablets)
- Mobile devices (iOS, Android)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Abhishek Singh**

---

## 📞 Support & Contact

For support, please use the contact form available on the platform or reach out through the contact page.

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Redux Toolkit Guide](https://redux-toolkit.js.org)

---

## 🐛 Known Issues & Limitations

- Video playback requires modern browsers with HTML5 support
- Large file uploads (>100MB) may require backend optimization
- Real-time notifications depend on active user sessions

---

## 🔄 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] AI-powered course recommendations
- [ ] Live video consultation feature
- [ ] Blockchain-based certificates
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Machine learning for health predictions

---

**Last Updated**: May 2026  
**Version**: 1.0.0
