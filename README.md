# 🌾 KrishiLink – Farmer’s Growth & Connection Platform

🚀 **Live Site:** *Add your deployed client URL here*  
🎥 **Project Demo Video:** `B12-A10_category-0015.mp4`

KrishiLink is a modern agricultural networking platform that connects **farmers, traders, and consumers** within a single digital environment.  
Unlike traditional e-commerce, KrishiLink works as a **social agro-network**, enabling users to communicate, collaborate, and build meaningful connections.

---

## ⭐ Features

- 🌱 Post crops you are growing or selling  
- 🔎 Browse and search all crop posts  
- 🤝 Show interest and connect with crop owners  
- 👨‍🌾 Manage personal crop posts (edit/delete)  
- 📩 Track all interests sent & received  
- 🔐 Firebase Authentication with Google Login  
- 📱 Fully responsive and reload-safe SPA  

---

## 🧩 Tech Stack

### **Frontend**
- React.js (Vite)
- React Router
- Firebase Authentication
- Tailwind CSS

### **Backend**
- Express.js  
- MongoDB  
- Hosted on Vercel  

### **Hosting**
- Client: Netlify   
- Server: Vercel  

---

## 🏠 Home Page Sections

- Hero Slider  
- Latest 6 Crop Posts  
- “How It Works” Section  
- Agro News / Blogs  
- Two additional custom sections  

---

## 📄 Core Pages

### 🔹 All Crops Page
- Displays all crops in grid/card layout  
- Search bar for filtering  
- View Details button for each card  

### 🔹 Crop Details Page (Private)
Shows full details of a crop with:
- Crop Information  
- Interest Form for non-owners  
- Auto price calculation  
- Disable form if interest already submitted  
- Owners can view all received interests  
- Accept/Reject actions update instantly  

### 🔹 Add Crop Page (Private)
- Form to add a new crop  
- Automatically links owner info  
- Redirects to My Posts after success  

### 🔹 My Posts Page (Private)
- Shows only logged-in user’s posts  
- Edit Post
- Delete with confirmation  

### 🔹 My Interests Page (Private)
- Displays all interests sent by the user  
- Shows status (pending / accepted / rejected)  
- Includes sorting options  

### 🔹 Profile Page (Private)
- View & edit user profile  

---

## 🔐 Authentication

### Login:
- Email + Password  
- Google Login  
- Redirect to desired page  
- error toast

### Registration:
- Name, Email, Photo, Password  
- Strong password validation  
- Google registration  
- Inline validation feedback  


---

## 📝 CRUD Operations

### Create  
Add new crops with:
- Name  
- Type  
- Price per unit  
- Unit  
- Estimated quantity  
- Description  
- Location  
- Image  
- Owner auto-attached  

### Read  
- Fetch all crops  
- Fetch latest 6 crops  
- Fetch single crop details  

### Update  
- Edit crop   
- Update Database + UI  

### Delete  
- Confirmation modal  
- Remove from DB + UI  

---

## 💼 Interest System

- Each user can send **one interest per crop**  
- Owner can't send interest to own crop  
- Auto-generated `_id` for interest (MongoDB ObjectId)  
- Accepting an interest reduces crop quantity  
- UI updates immediately  
- Buttons hidden after decision  

---

## ⚙ Additional Requirements Handled

- Toast-based success & error messages  
- No Lorem Ipsum text anywhere  
- No reload errors on any route  
- Fully responsive design  
- 404 Page designed  
- Loading states added everywhere  
