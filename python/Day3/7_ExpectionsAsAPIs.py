# def sqrt(x):
#     '''Computes Square Root using the method of Heron

#     Args:
#         x: The number for which compuation is needed.

#     Returns:
#         The square root of x.
#     '''
#     guess = x
#     i = 0
#     while guess * guess != x and i < 20:
#         guess = (guess + x/guess)/2.0
#         i += 1
#     return guess


# def main():
#     print(sqrt(9))
#     print(sqrt(2))
#     try:
#         print(sqrt(-1))
#     except ZeroDivisionError:
#         print("Cannot Squre Root negative number...")

#     print("Program Execution Continues...")

# if __name__ == '__main__':
#     main()
import sys

def sqrt(x):
    '''Computes Square Root using the method of Heron

    Args:
        x: The number for which compuation is needed.

    Returns:
        The square root of x.

    Raises:
        ValueError: If x is negative
    '''
    if(x < 0):
        raise ValueError("Cannot use negative number {}".format(x))
    guess = x
    i = 0
    while guess * guess != x and i < 20:
        guess = (guess + x/guess)/2.0
        i += 1
    return guess


def main():
    print(sqrt(9))
    print(sqrt(2))
    try:
        print(sqrt(-1))
    except ValueError as e:
        print(e, file=sys.stderr)

    print("Program Execution Continues...")


if __name__ == '__main__':
    main()
