# name = 'Manish'
# # name = "Manish's"
# # name = str(10)

# print(name[0])
# print(name[1:4])
# print(type(name))

# from urllib.request import urlopen

# with urlopen('http://textfiles.com/100/apples.txt') as story:
#     story_words = []
#     for line in story:
#         # line_words = line.split()
#         line_words = line.decode('utf-8').split()
#         for word in line_words:
#             story_words.append(word)

# print(story_words)

check = """Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.          Lorem Ipsum has 
been the industry's standard 
dummy text ever since the 1500s, 
when an unknown printer took a galley of 


type and scrambled it to make a type specimen book. 

It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially unchanged. 

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. """
print(check)