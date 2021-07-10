"""
Purpose: convert console log to a csv file
Dependency #1: every valid row must start with a '~' character before the data
Dependency #2: header must be included in log, starting with a '~' character
Connor Kasarda
"""

# Import packages for pattern finding and regex
import os, sys, re

# Declare variables
logext = '.log'
csvext = '.csv'
logname = input('Enter the name of the existing log file: ').strip(logext)
csvname = input('Enter the name of the csv file to be created: ').strip(csvext)

# Read all lines of the log file
logfile = open(os.path.join(sys.path[0], logname + logext), 'r')
loglines = logfile.readlines()

# Create and open the new csv file
csvfile = open(os.path.join(sys.path[0], csvname + csvext), 'w')

# Write to the csv file
for line in loglines:
    data = re.sub(r'^.*?~', '', line)
    if '~' in line:
        csvfile.write(data)

# Close the files
logfile.close()
csvfile.close()