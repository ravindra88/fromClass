def show(message, border="-"):
    line = border * len(message)
    print(line)
    print(message)
    print(line)


# show("Synechron")
# show("Hello There", "*")
# show("Hi There", border="^")
# show(message="Hey There", border="=")
show(border="=", message="Hey There")


