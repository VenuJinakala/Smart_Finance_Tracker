# Smart Finance Tracker

A modern, user-friendly web application to track your income and expenses efficiently. Manage your personal finances with an intuitive dashboard, real-time calculations, and comprehensive filtering options.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

- **Dashboard Overview**: View your total balance, income, and expenses at a glance
- **Transaction Management**: Add new transactions with title, amount, date, type, and category
- **Real-time Calculations**: Automatic updates of balance, total income, and total expenses
- **Search Functionality**: Quickly search through your transactions
- **Filter Options**: Filter transactions by type (All, Income, Expense)
- **Category Support**: Organize transactions with predefined categories:
  - Food
  - Shopping
  - Travel
  - Salary
  - Entertainment
- **Dark/Light Theme Toggle**: Switch between light and dark modes for comfortable viewing
- **Reset Functionality**: Clear all transactions and start fresh
- **Responsive Design**: Works seamlessly on desktop and mobile devices

---

## 📁 Project Structure

```
Smart_Finance_Tracker/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and themes
├── script.js           # JavaScript logic and functionality
└── README.md           # Project documentation (this file)
```

---

## 📄 File Descriptions

### **index.html**
The main HTML file that structures the entire application.

#### Key Sections:

1. **Header/Navigation Bar** (`<header class="navbar">`)
   - Application title: "Smart Finance Tracker"
   - Search input field for searching transactions
   - Theme toggle button (🌙) to switch between light and dark modes

2. **Hero Section** (`<section class="hero">`)
   - Welcome message and brief description
   - Motivational tagline: "Manage Your Money Smarter"

3. **Statistics Container** (`<section class="stats-container">`)
   - **Total Balance**: Displays the net balance (Income - Expense)
   - **Total Income**: Sum of all income transactions
   - **Total Expense**: Sum of all expense transactions
   - Each stat is displayed in a card format with dynamic values

4. **Transaction Form** (`<section class="form-section">`)
   - **Title Input**: Name/description of the transaction
   - **Amount Input**: Numerical value of the transaction
   - **Date Input**: Date picker for transaction date
   - **Type Dropdown**: Select between "Income" or "Expense"
   - **Category Dropdown**: Choose from predefined categories
   - **Submit Button**: Adds the transaction to the list

5. **Filter Section** (`<section class="filter-section">`)
   - **All Button**: Display all transactions
   - **Income Button**: Show only income transactions
   - **Expense Button**: Show only expense transactions
   - **Reset Button**: Clear all data and reset the application

6. **Transaction Container** (`<section id="transactionContainer">`)
   - Dynamic area where all transactions are displayed
   - Populated by JavaScript based on user input and filters

#### External Resources:
- **style.css**: External stylesheet for styling
- **script.js**: External JavaScript file for functionality

---

### **style.css** (Referenced)
Handles the visual styling of the application including:
- Navbar styling and layout
- Hero section design
- Statistics card appearance
- Form styling and input fields
- Filter button styles
- Transaction container and card layouts
- Light and dark theme CSS variables
- Responsive design media queries

---

### **script.js** (Referenced)
Contains all the JavaScript functionality for:
- Form submission and validation
- Transaction creation and storage (likely using localStorage)
- Real-time balance, income, and expense calculations
- Search functionality filtering
- Filter button interactions (All, Income, Expense)
- Theme toggle (light/dark mode switching)
- Reset functionality to clear all data
- Dynamic rendering of transactions in the DOM

---

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VenuJinakala/Smart_Finance_Tracker.git
   cd Smart_Finance_Tracker
   ```

2. **Open in a web browser**
   - Simply open `index.html` in your preferred web browser
   - No server or additional dependencies required

---

## 💻 Usage

### Adding a Transaction:

1. Fill in the transaction form:
   - **Title**: Enter what the transaction is for (e.g., "Grocery Shopping")
   - **Amount**: Enter the transaction amount in rupees
   - **Date**: Select the date of the transaction
   - **Type**: Choose "Income" or "Expense"
   - **Category**: Select an appropriate category

2. Click **"Add Transaction"** button
3. The transaction appears in the transaction list
4. Statistics update automatically

### Filtering Transactions:

- Click **"All"** to view all transactions
- Click **"Income"** to view only income transactions
- Click **"Expense"** to view only expense transactions

### Searching Transactions:

1. Use the search bar in the header
2. Type transaction title or keyword
3. Results filter in real-time

### Theme Toggle:

- Click the **🌙** button in the header to switch between light and dark modes
- Theme preference persists across sessions

### Reset All:

- Click the **"Reset All"** button to:
  - Clear all transactions
  - Reset balance, income, and expense to ₹0
  - Start fresh with a blank slate

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, layout, and animations |
| **JavaScript (ES6+)** | Functionality, DOM manipulation, and state management |
| **LocalStorage API** | Persistent data storage in the browser |
| **Rupee Symbol (₹)** | Currency display for Indian market |

---

## 🔄 How It Works

### Transaction Flow:

```
User Input (Form)
        ↓
JavaScript Validation
        ↓
Store in LocalStorage
        ↓
Calculate Balance, Income, Expense
        ↓
Update UI Components
        ↓
Apply Current Filter
        ↓
Display Transactions
```

### Data Persistence:

- All transactions are saved to the browser's **LocalStorage**
- Data persists even after closing the browser
- Data is cleared only when "Reset All" is clicked or browser cache is cleared

### Theme Management:

- Theme preference is likely stored in LocalStorage
- CSS variables switch between light and dark color schemes
- Toggle happens instantly without page reload

---

## 🎯 Category Guide

| Category | Best Used For |
|----------|---------------|
| **Food** | Groceries, dining out, food delivery |
| **Shopping** | Retail purchases, clothes, household items |
| **Travel** | Transportation, fuel, flights, bus/train tickets |
| **Salary** | Monthly/periodic income, bonuses |
| **Entertainment** | Movies, games, hobbies, streaming services |

---

## 📱 Responsive Design Features

- **Mobile-friendly** navbar and header
- **Flexible layout** for different screen sizes
- **Touch-friendly** buttons and inputs
- **Optimized form** for mobile device keyboards

---

## 🔮 Future Enhancements

Potential features to consider adding:

- 📊 **Data Visualization**: Charts and graphs for spending patterns
- 📅 **Date Range Filtering**: Filter transactions by specific date ranges
- 💾 **Export Data**: Download transactions as CSV or PDF
- 🏷️ **Custom Categories**: Allow users to create custom transaction categories
- 💰 **Budget Planning**: Set monthly budgets and get alerts
- 📱 **Progressive Web App**: Install as a mobile app
- ☁️ **Cloud Sync**: Synchronize data across devices
- 🔔 **Notifications**: Alert users about spending limits
- 📈 **Analytics**: Detailed financial reports and insights
- 🔐 **User Authentication**: Multi-user support with login

---

## 📝 Notes

- All amounts are displayed in **Indian Rupees (₹)**
- The application works entirely in the browser without requiring a backend server
- Data is stored locally on your device for privacy
- No internet connection required after initial load

---

## 👤 Author

**VenuJinakala**

---

## 📄 License

This project is open source and available for educational and personal use.

---

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes!

---

## 📞 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Happy tracking! 💰💡**