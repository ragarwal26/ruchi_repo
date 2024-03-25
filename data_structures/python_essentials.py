exp = [2200, 2350,2600,2130,2190]

print (exp[1]-exp[0])

print (exp[1]+exp[0]+exp[2])

print (2000 in exp)

exp.append(1980)

# exp[3] = exp[3] - 300

print(exp)

# 150
# 7150
# False
# [2200, 2350, 2600, 2130, 2190, 1980]

heros=['spider man','thor','hulk','iron man','captain america']

print (len(heros))

heros.append('black panther')
print (heros)
heros.pop()
print (heros)
heros.insert(3,'black panther')
print (heros)
heros[1:3] = ['doctor strange']
print (heros)
heros.sort()
print (heros)

def oddNum(val):
    lst = []
    for i in range(1,val):
        if i % 2 != 0:
            lst.append(i)

    print (lst)        

oddNum(20)    

print(ord('R'))

class Hashmap:
    def __init__(self):
        self.MAX = 100
        self.arr = [None for i in range(self.MAX)]

    def get_hash(self,key):
        h = 0
        for i in key:
            h += ord(i)

        return h % self.MAX

tt = Hashmap()
print(tt.get_hash('march 6') )               

from collections import deque
stack = deque()
class Stack:
    def __init__(self):
        self.container = deque()
    
    def push(self,val):
        return self.container.append(val)
        
    def pop(self):
        return self.container.pop()
    
    def peek(self):
        return  self.container[-1]
    
    def is_empty(self):
        return len(self.container)==0
    
    def size(self):
        return len(self.container)

s = Stack() 
s.push("We will conquere COVID-19")
s.peek()