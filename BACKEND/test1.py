import pandas as pd
import cv2
import urllib.request
import numpy as np
import os
from datetime import datetime
import face_recognition
from flask import Flask


# Path to the folder containing reference images
path = r'D:\\Kashif\\Delete\\Smartpick-ML\\assets\\img\\parents'

# URL for camera feed
url = 'http://192.168.87.105/cam-hi.jpg'

data = pd.read_csv(".\\assets\\data\\data.csv")
 

# Create or clear the Detected.csv file if it doesn't exist
if not os.path.exists('Detected.csv'):
    df_detected = pd.DataFrame(columns=['Parents_Name', 'Child_Name', 'timestamp'])
    df_detected.to_csv('Detected.csv', index=False)

# Read the reference images and their names
images = []
classNames = []
myList = os.listdir(path)
print("Reference Images List:", myList)
for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])
print("Class Names:", classNames)

# Function to encode reference images
def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList



def linkFaces(Parents_Name, Child_Name):
    # Load the existing detected data
    try:
        df_detected = pd.read_csv('Detected.csv')
    except FileNotFoundError:
        # If the CSV file doesn't exist, create an empty DataFrame
        df_detected = pd.DataFrame(columns=['Parents_Name', 'Child_Name', 'timestamp'])
    
    if ((df_detected['Parents_Name'] == Parents_Name) & (df_detected['Child_Name'] == Child_Name)).any():
        print(f"Duplicate entry: {Parents_Name} and {Child_Name} already exist.")
        return  # Exit the function without adding the duplicate entry
  
    # Check if the data size exceeds 100 rows
    print(len(df_detected))
    if len(df_detected) >= 10:
        # Remove the first row (oldest entry)
        rows_to_remove = len(df_detected) - 9
        df_detected = df_detected.iloc[rows_to_remove:]
    
    # Get the current time
    now = datetime.now()
    timestamp = now.strftime('%Y-%m-%d %H:%M:%S')
    
    # Create a new row with the detected and linked face and timestamp
    new_row = pd.DataFrame({'Parents_Name': [Parents_Name], 'Child_Name': [Child_Name], 'timestamp': [timestamp]})
    
    # Concatenate the new row to the existing dataframe 
    df_detected = pd.concat([df_detected, new_row], ignore_index=True)
    
    # Save the updated dataframe back to CSV
    df_detected.to_csv('Detected.csv', index=False)

# Encoding the reference images
encodeListKnown = findEncodings(images)
print('Encoding Complete')


def find_parent(child_name):
    print(f"Looking for parent of child: {child_name}")  # Debugging line
    matching_rows = data[data['Child'] == child_name]
    if not matching_rows.empty:
        print(f"Found parent: {matching_rows['Parents'].values[0]}")  # Debugging line 
        return matching_rows['Parents'].values[0]
    print("No parent found")  # Debugging line
    return "UNKNOWN"
    

# Loop to process the camera feed
while True:
    # Get the image from the camera feed
    img_resp = urllib.request.urlopen(url)
    imgnp = np.array(bytearray(img_resp.read()), dtype=np.uint8)
    img = cv2.imdecode(imgnp, -1)
    imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

    # Detect faces and encode the current frame
    facesCurFrame = face_recognition.face_locations(imgS)
    encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

    for encodeFace, faceLoc in zip(encodesCurFrame, facesCurFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
        matchIndex = np.argmin(faceDis)

        if matches[matchIndex]:
            name = classNames[matchIndex].upper()
            print("Detected Face:", name)


        linked_name = "UNKNOWN"

        if name == "KASHIF":
            linked_name = "SAIF"
        elif name == "DEEPAK":
            linked_name = "AMAN"
        elif name == "MOHANASUNDARAM":
            linked_name = "AASHIRWAD"
        elif name == "NAWAZ":
            linked_name = "ADVAIT"
        elif name == "AMAN":
            linked_name = "MAYUR"
        elif name == "NARAYAN":
            linked_name = "BUVAN"
        elif name == "PUTHUSSERY":
            linked_name = "SUVAN"
        else:
            linked_name = "UNKNOWN"
        # linked_name = find_parent(name)
                    

            # Draw bounding box and label
        y1, x2, y2, x1 = faceLoc
        y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.rectangle(img, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
        cv2.putText(img, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)

            # Link detected face with another face and save it to the CSV
        linkFaces(name, linked_name)

    # Display the video feed
    cv2.imshow('Webcam', img)
    
    # Allow for manual stopping by pressing 'q'
    key = cv2.waitKey(5)
    if key == ord('q'):
        break

cv2.destroyAllWindows()
