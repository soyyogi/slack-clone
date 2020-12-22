# Slack clone for ASPro.Net

This is a project for private alumni network.

The objectives of the project are to create an application for real-time
communication with channels feature borrowed from Slack and video conferencing
upto 99 people similar to Zoom.

This is applications is created using **create-react-app** and database service
of **cloud firestore** from google.


## Use this application following these steps:
1. Create a clone in your machine.
2. Change directory to local repo in your machine using```cd slack-clone```.
3. Install dependencies using```npm install``` command.
4. To start development mode use```npm start```.


## Development Process

1. Landing page created as a separate component.

2. Chat room created as a separate component
   
   1. Header section of chat room
   2. Sidebar header section
   3. Sidebar options component
   4. Config cloud firestore
   5. Set and render channels from db
      Using *useState* and *useEffect* hooks to manage state and set channels