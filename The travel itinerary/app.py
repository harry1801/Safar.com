from flask import Flask, render_template, request

app = Flask(__name__)

# Set up your OpenAI API key
import openai
openai.api_key = "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"

# Function to generate the travel itinerary using OpenAI
def generate_itinerary(duration, budget, interests, accommodation,transportationType, food_preferences, must_see_attractions):
    # Construct the prompt for the OpenAI script
    prompt = f"Generate a personalized travel itinerary for a trip to Mumbai with a budget of {budget} indian rupees. The traveler is interested in a {interests} vacation and wants to must see the following attractions {must_see_attractions}. They are looking for {accommodation} accommodations and prefer {transportationType} transportation. The itinerary should include {food_preferences} in dining options. Please provide a detailed itinerary with daily recommendations for {duration} days, including suggested destinations, activities, and dining options.Note:The palces you recommend to visit in a day must be strictly nearby. The itinerary should be written in English Language.Format your response using Markdown. Use headings, subheadings, bullet points, and bold to organize the information.Note: Response must be in the html tags format only also add inline css to it."

    # Generate response using OpenAI's chat completions API
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=2000,
        temperature=0.8,
        n=1,
        stop=None,
        timeout=60,
    )

    # Extract the generated itinerary from the response
    itinerary = response.choices[0].text.strip()

    return itinerary

# Define a route to render the HTML form
@app.route("/")
def index():
    return render_template("index.html")

# Define a route to handle form submission and generate the itinerary
@app.route("/generate_itinerary", methods=["POST"])
def generate_itinerary_route():
    # Retrieve user input from the form
    # destination = request.form["destination"]
    duration = request.form["duration"]
    budget = request.form["budget"]
    interests = request.form.getlist("interests[]")
    accommodation = request.form["accommodation"]
    transportationType = request.form["transportation_type"]
    food_preferences = request.form["food_preferences"]
    must_see_attractions = request.form["must_see_attractions"]

    # Call the function to generate the itinerary
    result = generate_itinerary(duration, budget, interests, accommodation,transportationType, food_preferences, must_see_attractions)

    return render_template("itinerary.html", result=result)

if __name__ == "__main__":
    app.run(port=5001)
