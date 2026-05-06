# 🏠 Real Estate Price Prediction System

A Machine Learning based Real Estate Price Prediction web application developed using **Python, Flask, Pandas, Scikit-learn, HTML, CSS, and JavaScript**. The system predicts property prices based on multiple property-related features such as city, locality, property type, furnishing status, area, and other attributes.

---

## 🚀 Features

* 📊 Predicts real estate property prices using Machine Learning
* 🌐 Interactive web interface using Flask
* 🏙️ Supports multiple cities and localities
* 🧠 Uses preprocessing techniques like:

  * One-Hot Encoding
  * Target Encoding
  * Feature Alignment
* ⚡ Real-time prediction through API endpoint
* 🎨 Responsive frontend with HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

### Backend

* Python
* Flask
* Pandas
* Scikit-learn
* Pickle

### Frontend

* HTML
* CSS
* JavaScript

### Machine Learning

* Regression-based prediction model
* Feature Engineering
* Data Preprocessing

---

## 📂 Project Structure

```bash
FoDS_project/
│
├── app.py                              # Main Flask application
├── Real_Estate_Price_Predication.ipynb # Model training and analysis notebook
├── city_mapping.json                   # City and locality mapping data
│
├── templates/
│   └── index.html                      # Frontend webpage
│
├── static/
│   ├── style.css                       # Styling file
│   └── script.js                       # Frontend logic
│
└── pipeline.pkl                        # Trained ML pipeline model
```

---

## ⚙️ How It Works

1. User enters property details in the web interface.
2. Flask backend receives the input data.
3. Data preprocessing is applied:

   * Target Encoding
   * One-Hot Encoding
   * Missing value handling
4. Processed data is passed to the trained ML model.
5. The predicted property price is returned and displayed on the webpage.

---

## 📌 Input Features

The prediction model uses features such as:

* Property Type
* Building Status
* Furnishing Status
* City
* Locality
* Sub Urban Area
* BHK
* Area
* Bathrooms
* Balconies
* Penthouse Availability
* Studio Availability

---

## ▶️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/real-estate-price-prediction.git
cd real-estate-price-prediction
```

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Flask Application

```bash
python app.py
```

### 4️⃣ Open in Browser

```bash
http://127.0.0.1:5000/
```

---

## 📊 Machine Learning Workflow

* Data Cleaning
* Feature Engineering
* Target Encoding for locality and suburban data
* One-Hot Encoding for categorical features
* Model Training
* Prediction Pipeline Creation
* Deployment using Flask

---

## 📸 Screenshots

Add project screenshots here.

Example:

* Home Page
* Prediction Result
* Model Analysis Graphs

---

## 🔮 Future Improvements

* Add more city datasets
* Improve prediction accuracy
* Deploy on cloud platforms
* Add user authentication
* Integrate maps and location APIs
* Add price trend visualization

---

## 👨‍💻 Author

**Yash Krishan Gupta**

---

## 📄 License

This project is developed for educational and academic purposes.
