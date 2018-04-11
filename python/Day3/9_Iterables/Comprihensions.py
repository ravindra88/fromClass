words = """Lorem ipsum dolor sit amet consectetur adipisicing elit.
Reiciendis eum, laudantium harum voluptas, debitis aliquid porro accusantium ducimus corporis 
sit aspernatur tenetur magnam vitae nesciunt officiis aperiam cupiditate similique explicabo.""".split()

# print(words)

# Traditional Code
# lengths = []
# for word in words:
#     lengths.append(len(word))

# print("\n", lengths)

# List Comprehension - [expr(item) for item in collection]
# r1 = [len(word) for word in words]
# print(type(r1))
# print(r1)

# Example 2
from math import factorial
# r2 = [factorial(x) for x in range(20)]
# print(r2)

# r2 = [len(str(factorial(x))) for x in range(20)]
# print(r2)

# Set
# r3 = {len(str(factorial(x))) for x in range(20)}
# print(r3)

from pprint import pprint as pp

countrycapital = {'India': 'Delhi', 'Morocco': 'Rabat',
                  'Netherlands': 'Amsterdam', 'UAE': 'Abu Dhabi'}


# for key, val in countrycapital.items():
#     print(key + "\t" + val)

pp(countrycapital)
# print(countrycapital)

capitalcountry = {capital: country for country,
                  capital in countrycapital.items()}
                  
pp(capitalcountry)