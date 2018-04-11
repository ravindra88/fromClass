fo = open("test.txt", "w+")

print("Name of the file: ", fo.name)
print("Status: ", fo.closed)
print("Mode: ", fo.mode)

fo.write("This is just an example of File Write.\nUsing Python\n")

position = fo.tell()
print("Current Curson Position : ", position)

position = fo.seek(0)
print("Current Curson Position : ", position)

str = fo.read(10)
print("Read string is: ", str)

fo.close()
# print("Name of the file: ", fo.name)
# print("Status: ", fo.closed)
# print("Mode: ", fo.mode)