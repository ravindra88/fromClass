# import csv

# myData = [["fname", "lname", "city"], [
#     "Manish", "Sharma", "Delhi"], ["Abhijeet", "Gole", "Pune"]]

# myFile = open('example.csv', 'w', newline='')
# with myFile:
#     writer = csv.writer(myFile)
#     writer.writerows(myData)

# print("Write Completed...")

# ------------------------------------- Read
# import csv

# with open('example.csv') as File:
#     reader = csv.reader(File, delimiter=',', quotechar=',',
#                         quoting=csv.QUOTE_MINIMAL)
#     for row in reader:
#         print(row)

# ------------------------------------- Using Dict
import csv

result = []

with open('example.csv') as File:
    reader = csv.DictReader(File)
    for row in reader:
        result.append(row)

    print(result)