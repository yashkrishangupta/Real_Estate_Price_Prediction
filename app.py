from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd
import json

app = Flask(__name__)

# Load pipeline
pipeline = pickle.load(open("pipeline.pkl", "rb"))

model = pipeline["model"]
ohe = pipeline["ohe"]
features = pipeline["features"]
locality_mean = pipeline["locality_mean"]
suburban_mean = pipeline["suburban_mean"]

# Load mapping
with open("city_mapping.json") as f:
    city_mapping = json.load(f)


@app.route('/')
def home():
    return render_template("index.html", city_mapping=city_mapping)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Backend safety rules
    if data["Property_type"] != "Apartment":
        data["is_PentaHouse"] = 0

    if data["Property_type"] not in ["Apartment", "Independent House", "Independent Floor"]:
        data["is_studio"] = 0

    df = pd.DataFrame([data])

    # Target encoding
    df["locality"] = df["locality"].map(locality_mean)
    df["sub_urban"] = df["sub_urban"].map(suburban_mean)

    df["locality"].fillna(sum(locality_mean.values())/len(locality_mean), inplace=True)
    df["sub_urban"].fillna(sum(suburban_mean.values())/len(suburban_mean), inplace=True)

    # One-hot encoding
    cat_cols = ["Property_type","Property_building_status","city","is_furnished"]
    encoded = ohe.transform(df[cat_cols])
    encoded_df = pd.DataFrame(encoded, columns=ohe.get_feature_names_out(cat_cols))

    df = df.drop(columns=cat_cols)
    final_df = pd.concat([df, encoded_df], axis=1)

    final_df = final_df.reindex(columns=features, fill_value=0)

    prediction = model.predict(final_df)[0]

    return jsonify({"prediction": round(prediction, 2)})


if __name__ == "__main__":
    app.run(debug=True)