# 🏠 Real Estate Price Prediction System

A Machine Learning based Real Estate Price Prediction web application developed using **Python, Flask, Scikit-learn, Pandas, HTML, CSS, and JavaScript**. The system predicts residential property prices across major Indian cities based on property features such as location, area, furnishing, BHK, and property type.

---

## 🚀 Features

- 📊 Predict property prices using Machine Learning
- 🌐 Interactive Flask web application
- 🏙️ Supports multiple Indian cities and localities
- 🧠 Uses data preprocessing and feature engineering
- ⚡ Real-time price prediction
- 📈 Trained and evaluated on large-scale Indian real estate dataset
- 🎨 Responsive frontend UI

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask
- Pandas
- NumPy
- Scikit-learn
- Pickle

### Machine Learning
- Random Forest Regressor
- XGBoost
- CatBoost
- LightGBM
- Feature Engineering
- One-Hot Encoding
- Target Encoding

### Frontend
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

```bash
FoDS_project/
│
├── app.py                               # Main Flask application
├── Real_Estate_Price_Predication.ipynb # Model training notebook
├── pipeline.pkl                         # Trained ML model pipeline
├── city_mapping.json                    # City and locality mapping
├── dataset.csv                          # Kaggle dataset used for training
│
├── templates/
│   └── index.html                       # Frontend page
│
├── static/
│   ├── style.css                        # Styling
│   └── script.js                        # Frontend logic
│
└── README.md
```

---

## 📥 Dataset

Dataset used for training and testing the model:

- **Residential Property Price: Indian Cities Dataset**
- Source: Kaggle  
- Link:  
https://www.kaggle.com/datasets/manishmathias/residential-property-price-indian-cities-dataset

---

## ⚙️ How It Works

1. User enters property details in the web interface.
2. Flask backend receives the input data.
3. Data preprocessing and encoding are applied.
4. Features are passed to the trained ML model.
5. The predicted property price is displayed instantly.

---

## 📌 Input Features

The model uses features such as:

- City
- Locality
- Sub Urban Area
- Property Type
- Building Status
- Furnishing Status
- BHK
- Area (sqft)
- Trust Score
- RERA Registration
- Ready to Move
- Penthouse / Studio Flags

---

## 🤖 Machine Learning Workflow

- Data Cleaning
- Feature Engineering
- Outlier Removal
- Target Encoding
- One-Hot Encoding
- Model Training & Evaluation
- Random Forest Best Model Selection
- Pipeline Serialization
- Flask Deployment

---

## 📊 Model Performance

Multiple regression models were trained and compared:

| Model | R² Score |
|------|------|
| Random Forest | 0.90 |
| XGBoost | 0.87 |
| CatBoost | 0.87 |
| LightGBM | 0.86 |

✅ **Random Forest** achieved the best performance and was used in deployment.

---

## ▶️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/real-estate-price-prediction.git
cd real-estate-price-prediction
```

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run Flask App

```bash
python app.py
```

### 4️⃣ Open in Browser

```bash
http://127.0.0.1:5000/
```

---

## 🔮 Future Improvements

- Add real-time property data updates
- Improve prediction accuracy
- Deploy on cloud platforms
- Add map integration
- Add price trend visualization
- Create mobile app version

---

## 👨‍💻 Author

**Yash Krishan Gupta**

---

## 📄 License

This project is developed for educational and academic purposes.
