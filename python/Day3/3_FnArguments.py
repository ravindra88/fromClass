m = [1, 2, 3]


def modify(k):
    k.append(30)
    print("k= ", k)


modify(m)
print("m= ", m)

f = [1, 2, 3]


def replace(k):
    k = [10, 20, 30]
    print("k= ", k)


replace(f)
print("f= ", f)
