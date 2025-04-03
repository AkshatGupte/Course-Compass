from fastapi import FastAPI
import pickle
import faiss
from sentence_transformers import SentenceTransformer
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS so React can communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and data
model = pickle.load(open("model.pkl", "rb"))
df1 = pickle.load(open("courses.pkl", "rb"))
df2 = pickle.load(open("coursera.pkl", "rb"))
df = pickle.load(open('youtube_courses.pkl','rb'))
vectors1 = pickle.load(open("vectors.pkl", "rb"))
vectors2 = pickle.load(open("vectors2.pkl", "rb"))
vectors3 = pickle.load(open('youtube_vector.pkl','rb'))


# Load FAISS index
def faiss_load(vectors):
    d = vectors.shape[1]
    index = faiss.IndexFlatL2(d)
    index.add(vectors)
    return index

index1 = faiss_load(vectors1)
index2 = faiss_load(vectors2)
index3 = faiss_load(vectors3)
# Recommendation function

def faiss_recommend(query, index, df, top=100):  # Fetch top 100 similar courses
    embed = model.encode([query]).astype('float32')
    distances, indexes = index.search(embed, top)

    # Get the courses from the dataframe
    results = df.iloc[indexes[0]][["title", "avg_rating", "course_url"]]

    # Sort by highest rating and take the top 10
    top_results = results.sort_values(by="avg_rating", ascending=False).head(10)

    return top_results.to_dict(orient="records")

def faiss_recommend1(word,index,df,top=10):
    embed = model.encode([word]).astype('float32')
    distances, indexes = index.search(embed, top + 1)

    input_index = df[df['title'] == word].index

    filtered_indexes = [idx for idx in indexes[0] if idx not in input_index]

    filtered_indexes = filtered_indexes[:top]

    return df.iloc[filtered_indexes][['title','url','platform']]


# API Endpoint for recommendations
@app.get("/recommend")
def recommend(query: str):
    udemy_results = faiss_recommend(query, index1, df1, top=100)
    coursera_results = faiss_recommend(query, index2, df2, top=100)
    youtube_results = faiss_recommend1(query, index3, df, top=10)

    return {
        "udemy": udemy_results,
        "coursera": coursera_results,
        "youtube": youtube_results
    }


# Run the server: `uvicorn api:app --host 0.0.0.0 --port 8000`
