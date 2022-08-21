const LinkedList = require('./linkedlist')

describe('#insertAtHead', () => {
    test('It adds the element to the beginning of the list', () => {
        const li = new LinkedList()
        li.insertAtHead(10)
        const oldHead = li.head
        li.insertAtHead(20)

        expect(li.head.value).toBe(20)
        expect(li.head.next).toBe(oldHead)
        expect(li.length).toBe(2)
    })
})