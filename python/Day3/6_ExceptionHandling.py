# def convert(s):
#     '''Convert to an Integer'''
#     x = int(s)
#     return x

# print(convert("10"))
# print(convert("sd"))
# print("I am still there")


# def convert(s):
#     '''Convert to an Integer'''
#     try:
#         x = int(s)
#         print("Conversion Success")
#     except ValueError:
#         x = -1
#         print("Conversion Failed")
#     except TypeError:
#         x = -1
#         print("Conversion Failed")
#     return x

# def convert(s):
#     '''Convert to an Integer'''
#     x = -1
#     try:
#         x = int(s)
#         print("Conversion Success")
#     except (ValueError, TypeError):
#         print("Conversion Failed")
#     return x

# print(convert("10"))
# print(convert("sd"))
# print(convert([1, 2, 3]))
# print("I am still there")


# def convert(s):
#     '''Convert to an Integer'''
#     x = -1
#     try:
#         x = int(s)
#     except (ValueError, TypeError):
#         pass
#     return x

# def convert(s):
#     '''Convert to an Integer'''
#     try:
#         return int(s)
#     except (ValueError, TypeError):
#         return -1

# print(convert("10"))
# print(convert("sd"))
# print(convert([1, 2, 3]))
# print("I am still there")

# Named Reference

# import sys


# def convert(s):
#     '''Convert to an Integer'''
#     try:
#         return int(s)
#     except (ValueError, TypeError) as e:
#         print("Conversion Error: {}".format(str(e)), file=sys.stderr)
#         return -1


# print(convert("10"))
# print(convert("sd"))
# print(convert([1, 2, 3]))
# print("I am still there")

# Same Exception Propogated

# import sys

# def convert(s):
#     '''Convert to an Integer'''
#     try:
#         return int(s)
#     except (ValueError, TypeError) as e:
#         print("Conversion Error: {}".format(str(e)), file=sys.stderr)
#         raise


# print(convert("10"))
# print(convert("sd"))
# print(convert([1, 2, 3]))
# print("I am still there")

import sys
from math import log


def convert(s):
    '''Convert to an Integer'''
    try:
        return int(s)
    except (ValueError, TypeError) as e:
        print("Conversion Error: {}".format(str(e)), file=sys.stderr)
        return -1
        # raise


def string_log(s):
    v = convert(s)
    return log(v)

print(string_log("10"))
print(string_log("ABC"))
