# import words
# words.fetch_words()

# from words import fetch_words
# fetch_words()

# from words import fetch_words as fetch
# fetch()

# import sys
# print(sys.path)

# print("Usage " + __name__)
import words

# results  = words.fetch_words("http://textfiles.com/100/apples.txt")
# # print(results)
# words.print_items(results)

words.main("http://textfiles.com/100/apples.txt")