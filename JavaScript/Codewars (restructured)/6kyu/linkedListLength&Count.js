https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript
// Description

// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3

// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count
// Linked Lists - Get Nth Node
// Linked Lists - Insert Nth Node
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort
// Linked Lists - Append
// Linked Lists - Remove Duplicates
// Linked Lists - Move Node
// Linked Lists - Move Node In-place
// Linked Lists - Alternating Split
// Linked Lists - Front Back Split
// Linked Lists - Shuffle Merge
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse

// Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.
// Linked Lists
// Data Structures
// Fundamentals


// My solution
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head == null) {
    return 0;
  } 
  let count = 0;
  let current = head;
  while (current != null) {
    count++;
    current = current.next;
  }
  return count;
}

function count(head, data) {
   if (head == null) {
    return 0;
  }
  let count = 0;
  let current = head;
  while (current != null) {
    if (current.data == data) {
      count++;
    }
    current = current.next;
  }
  return count;
}


// other solution
function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}


