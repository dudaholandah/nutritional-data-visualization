from sklearn import preprocessing
import numpy as np
import pandas as pd
import re
from unidecode import unidecode

def pre_process(text):
  text = re.sub(r'[.,():%-]+', " ", text)
  text = re.sub(r'[\s]+', " ", text)
  text = unidecode(text.strip().lower())
  return text

def separating_data(df):
  data_ingredients = pd.DataFrame(df['Ingredients'])
  data_nutrients = df.drop(columns=['Ingredients', 'Classification', 'Description'])
  data_classification = pd.DataFrame(df['Classification'])
  data_name = pd.DataFrame(df['Description'])
  label_data = data_classification.join(data_name)
  return data_ingredients, data_nutrients, label_data

def normalizing_nutrients(data_nutrients):
  X = data_nutrients.values
  attributes_dummies = data_nutrients.columns
  normalize = preprocessing.MinMaxScaler()
  xscaled = normalize.fit_transform(X)
  nutrients_normalized = pd.DataFrame(xscaled,columns=attributes_dummies)
  nutrients_normalized = nutrients_normalized.replace(np.nan,0)
  return nutrients_normalized

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

def final_data(nutrients_normalized, label_data):
  raw_data = pd.DataFrame(nutrients_normalized)
  raw_data = raw_data.replace(np.nan,0)

  X = raw_data.values
  y = label_data.values
  all_data = label_data.join(raw_data)
  
  for i in range(all_data.shape[0]):
    label = label_data['Classification'][i].rstrip()
    label_data.at[i,'Classification'] = label
    all_data.at[i,'Classification'] = label

  return X, y, all_data