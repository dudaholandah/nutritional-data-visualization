from flask import Flask, request
from flask_cors import CORS
import json
import pandas as pd
from auxiliary import *
# from sklearn.manifold import TSNE

app = Flask(__name__)
CORS(app)

def pre_processing_data(fileData):
  df = pd.DataFrame.from_records(fileData)

  # separating data
  data_ingredients, data_nutrients, label_data = separating_data(df)

  # normalizing nutrients
  # nutrients_normalized = normalizing_nutrients(data_nutrients)

  # # normalizing ingredients
  # ingredients_normalized = normalizing_ingredients(data_ingredients)

  # final data
  # X, y, data = final_data(ingredients_normalized, nutrients_normalized, label_data)
  X, y, data = final_data(data_nutrients, label_data)

  return X, y, data
  
@app.route('/tsne', methods=['POST'])
def tsne_data(): 
  fileData = request.get_json()

  X, y, data = pre_processing_data(fileData)

  # tsne = TSNE(n_components=2,perplexity=5,learning_rate=350,metric='euclidean', init='pca')
  # X_tsne = tsne.fit_transform(X)

  # X_tsne[1:4,:]

  # X = X_tsne[:,0]
  # y = X_tsne[:,1]

  X = X.tolist()
  y = y.tolist()

  return {'X': X, 'y': y}

  # f = open('data.json')
  # data = json.load(f)
  # f.close()

  # return data
  
      
# Running app
if __name__ == '__main__':
  app.run(debug=True)
    