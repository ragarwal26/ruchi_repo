class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
class linked_list:
    def __init__(self, head=None):
        self.head = head
    def iterate_item(self):
        current_item = self.head
        while current_item:
            val = current_item.data
            current_item = current_item.next
            yield val