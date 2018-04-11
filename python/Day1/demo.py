# print('hello world')

# --------------------- Using Function
# def hello():
#     print('hello world')

# hello()

# --------------------- Using Function Parameter
# def hello(who):
#     print('hello {}'.format(who))

# hello('world')

# ----------------------- Using Function with parameter from console
import sys

def hello(who):
    print('hello {}'.format(who))

hello(sys.argv[1])

