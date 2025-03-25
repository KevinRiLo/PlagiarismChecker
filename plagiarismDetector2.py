import os

def jaccard_similarity(x,y):
  """ returns the jaccard similarity between two lists """
  intersection_cardinality = len(set.intersection(*[set(x), set(y)]))
  union_cardinality = len(set.union(*[set(x), set(y)]))
  return intersection_cardinality/float(union_cardinality)

# Open student file
studentDoc = open("filename.txt", "r")

# Get files from the database (LINK TO DATABASE)
dbFiles = [file for file in os.listdir() if file.endswith('.txt') or file.endswith('.docx')]

# Method to determine plagiarism
def findPlagiarism():

  # Iterate through each file in the database
  for file in dbFiles:

    # Open the current file in the database
    dbFile = open(dbFiles[file], "r")

    # Get similarity value by comparison
    similarity = jaccard_similarity(studentDoc, dbFile)

    # Arbitrary value, change later if wanted
    if similarity > 0.3:
      # Return boolean
      return True
  
  # If plagiarism is not found, return false
  return False

# Call findPlagiarism method and determine if file was plagiarized
if (findPlagiarism()):
  print("File is plagiarized")
else:
  print("File is not plagiarized")