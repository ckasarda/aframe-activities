# How to log data
1. Make sure to add the javascript or a reference to the javascript with the A-Frame component code to your A-Frame HTML file
2. Add the leap-log component to any entity in your scene (For the leap motion controllers, I usually add it to the a-entity that also has the camera and look-controls added)
3. For the leap-log component, specify the id (participant's id number) and trial (trial number) properties
4. Run the A-Frame scene in your browser
5. When you are done running the scene, or when your trial is over, right click on the browser window where your A-Frame scene is running and select inspect
6. Click on the console tab, and you will see data rows being printed out; you will want to right click on the printed out data and click save as
7. Once your data is saved to your computer, move it to the folder where you have these files: log-leap.js, log-to-csv.py, leaphands.html
8. Run the log-to-csv.py python program and complete the prompts that ask name of log file (what you downloaded and saved from the web browser) and the name of the csv file you want to create and store the data to.
9. Done! You should now have generated a csv file that contains your leap hand data
