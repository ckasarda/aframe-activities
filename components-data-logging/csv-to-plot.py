"""
Purpose: convert csv file with leap hand and trackable data into a graph
Dependency #1: File must be csv with formatting of columns matching what is created from log-leap-and-objs-solution.js and log-to-csv.py
Connor Kasarda
"""

# Import packages for pattern finding and regex
import os, sys
import matplotlib.pyplot as plt
import pandas as pd

# Declare variables
csvext = '.csv'
csvname = input('Enter the name of the csv file to graph: ').strip(csvext)
csvfile = pd.read_csv(os.path.join(sys.path[0], csvname + csvext))

# Plot the csv data
plt.figure()
x = range(len(csvfile['time-ms']))
plt.plot(x, csvfile['left-grab'])
plt.plot(x, csvfile['right-grab'])
    # Add more plt.plot(x, csvfile['...']) function calls where "..." is any column you want plotted on the graph
plt.xticks(x, csvfile['time-ms'])
plt.xlabel('Time (ms)')
plt.ylabel('Grab Strength')
plt.show()