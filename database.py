import json
import os
import uuid


class Database:
    def __init__(self, filename='database.json'):
        # Initialize the database with a filename
        self.filename = filename
        if os.path.exists(self.filename):
            with open(self.filename, 'r') as file:
                self.store = json.load(file)
        else:
            self.store = {}

    # Save the database to the file
    def save(self):
        with open(self.filename, 'w') as file:
            json.dump(self.store, file, indent=4)

    # Insert a document into the database
    def insert(self, document):
        doc_id = str(uuid.uuid4())
        self.store[doc_id] = document
        self.save()

        return doc_id

    # Update a document in the database
    def update(self, doc_id, document):
        if doc_id not in self.store:
            raise KeyError("Document ID does not exist.")
        self.store[doc_id] = document
        self.save()

    # Get a document from the database
    def get(self, doc_id):
        return self.store.get(doc_id, None)

    # Delete a document from the database
    def delete(self, doc_id):
        if doc_id in self.store:
            del self.store[doc_id]
            self.save()
        else:
            raise KeyError("Document ID does not exist.")
