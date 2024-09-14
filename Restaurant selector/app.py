from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)


data = pd.read_csv('restaurant.csv',encoding='latin-1')

# Clean up column names
data.columns = data.columns.str.strip()
data.rename(columns={
    'name': 'Name_Column_In_CSV',
    # Add mappings for other columns
}, inplace=True)
data['Name_Column_In_CSV'].fillna('', inplace=True)
data['address'].fillna('', inplace=True)

# Function to filter restaurants based on area, price range, and rating range
def get_recommendations(area, price_range, rating_range):
    try:
        recommendations = []

        filtered_data = data[(data['area'].str.lower() == area.lower()) & 
                             (data['cost'] >= price_range[0]) & (data['cost'] <= price_range[1]) &
                             (data['rating'] >= rating_range[0]) & (data['rating'] <= rating_range[1])]

        if not filtered_data.empty:
            recommendations = filtered_data['Name_Column_In_CSV'][:10].tolist()
        else:
            recommendations.append("No restaurants found matching your criteria.")

        return recommendations
    except KeyError:
        return ["Invalid input. Please enter valid area, price range, and rating range."]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    area = request.form['area']
    price_min = float(request.form['priceMin'])
    price_max = float(request.form['priceMax'])
    rating_min = float(request.form['ratingMin'])
    rating_max = float(request.form['ratingMax'])

    price_range = (price_min, price_max)
    rating_range = (rating_min, rating_max)

    recommendations = get_recommendations(area, price_range, rating_range)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(port=5000)
