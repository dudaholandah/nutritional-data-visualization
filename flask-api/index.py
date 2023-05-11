from flask import Flask
from flask_cors import CORS

# from sklearn import preprocessing
# from sklearn.manifold import TSNE
# import pandas as pd
# import numpy as np
# import re
# from unidecode import unidecode
import json

app = Flask(__name__)
CORS(app)

# def pre_process(text):
#   text = re.sub(r'[.,():%-]+', " ", text)
#   text = re.sub(r'[\s]+', " ", text)
#   text = unidecode(text.strip().lower())
#   return text

# def separating_data(df):
#   data_ingredients = pd.DataFrame(df['Ingredients'])
#   data_nutrients = df.drop(columns=['Ingredients', 'Classification', 'Description'])
#   data_classification = pd.DataFrame(df['Classification'])
#   data_name = pd.DataFrame(df['Description'])
#   label_data = data_classification.join(data_name)
#   return data_ingredients, data_nutrients, label_data

# def normalizing_nutrients(data_nutrients):
#   X = data_nutrients.values
#   attributes_dummies = data_nutrients.columns
#   normalize = preprocessing.MinMaxScaler()
#   xscaled = normalize.fit_transform(X)
#   nutrients_normalized = pd.DataFrame(xscaled,columns=attributes_dummies)
#   nutrients_normalized = nutrients_normalized.replace(np.nan,0)
#   return nutrients_normalized

# def normalizing_ingredients(data_ingredients):
#   vocab = set()

#   for i in range(data_ingredients.shape[0]):
#     aux = data_ingredients.at[i,'Ingredients'].split(",")
#     for word in aux:
#       word = pre_process(word)
#       if len(word) > 1: vocab.add(word.strip())

#   sorted(vocab)
#   ingredients_normalized = pd.DataFrame()

#   ingredients_normalized = {}

#   for word in sorted(vocab):
#     ingredients_normalized[word] = []

#   for i in range(276):
#     aux = data_ingredients.at[i,'Ingredients'].split(",")
#     for i in range(len(aux)):
#       aux[i] = pre_process(aux[i])
#     for word in sorted(vocab):
#       if word in aux: ingredients_normalized[word].append(1)
#       else: ingredients_normalized[word].append(0)   

#   ingredients_normalized = pd.DataFrame(ingredients_normalized)
#   return ingredients_normalized

# def final_data(ingredients_normalized, nutrients_normalized, label_data):
#   raw_data = pd.DataFrame(ingredients_normalized)
#   raw_data = pd.concat([raw_data,nutrients_normalized], axis=1)
#   raw_data = raw_data.replace(np.nan,0)

#   X = raw_data.values
#   y = label_data.values
#   all_data = label_data.join(raw_data)
  
#   for i in range(all_data.shape[0]):
#     label = label_data['Classification'][i].rstrip()
#     label_data.at[i,'Classification'] = label
#     all_data.at[i,'Classification'] = label

#   return X, y, all_data


# def pre_processing_data(fileData):
#   df = pd.DataFrame.from_records(fileData)

#   # separating data
#   data_ingredients, data_nutrients, label_data = separating_data(df)

#   # normalizing nutrients
#   nutrients_normalized = normalizing_nutrients(data_nutrients)

#   # normalizing ingredients
#   ingredients_normalized = normalizing_ingredients(data_ingredients)

#   # final data
#   X, y, data = final_data(ingredients_normalized, nutrients_normalized, label_data)

#   return X, y, data
  
@app.route('/tsne', methods=['POST'])
def tsne_data(): 
  # fileData = request.get_json()

  # X, y, data = pre_processing_data(fileData)

  # tsne = TSNE(n_components=2,perplexity=5,learning_rate=350,metric='euclidean', init='pca')
  # X_tsne = tsne.fit_transform(X)

  # X_tsne[1:4,:]

  # X = X_tsne[:,0]
  # y = X_tsne[:,1]

  # X = X.tolist()
  # y = y.tolist()
  
  # print("----> ", X)
  # print("-------->", y)

  # return {'X': X, 'y': y}

  f = open('data.json')
  data = json.load(f)
  f.close()

  return data
  
      
# Running app
if __name__ == '__main__':
  app.run(debug=True)
    