# def fetch_words():
#     from urllib.request import urlopen
#     with urlopen('http://textfiles.com/100/apples.txt') as story:
#         story_words = []
#         for line in story:
#             line_words = line.decode('utf-8').split()
#             for word in line_words:
#                 story_words.append(word)

#     print(story_words)

# # print(__name__)

# if __name__ == "__main__":
#     fetch_words()

# import sys

# def fetch_words(url):
#     from urllib.request import urlopen
#     with urlopen(url) as story:
#         story_words = []
#         for line in story:
#             line_words = line.decode('utf-8').split()
#             for word in line_words:
#                 story_words.append(word)

#     return story_words

# def print_items(items):
#     for item in items:
#         print(item)

# def main(url):
#     items = fetch_words(url)
#     print_items(items)

# if __name__ == "__main__":
#     main(sys.argv[1])


# Code Documentation - Shebang
#!/usr/bin/env python
"""Retrive and print words from URL

Usage:
    py words.py
"""
import sys


def fetch_words(url):
    """Fetch a list of words from a URL

    Args:
        url: The url of a UTF-8 text document

    Returns:
        A list of strings containing the words from the document.
    """
    from urllib.request import urlopen
    with urlopen(url) as story:
        story_words = []
        for line in story:
            line_words = line.decode('utf-8').split()
            for word in line_words:
                story_words.append(word)

    return story_words


def print_items(items):
    for item in items:
        print(item)


def main(url):
    items = fetch_words(url)
    print_items(items)


if __name__ == "__main__":
    main(sys.argv[1])
