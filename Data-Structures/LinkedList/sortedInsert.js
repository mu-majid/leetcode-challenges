function sortedInsert(new_node) {
  var current;

  /* Special case for head node */
  if (head == null || head.data >= new_node.data) {
    new_node.next = head;
    head = new_node;
  } else {

    /* Locate the node before point of insertion. */
    current = head;

    while (current.next != null && current.next.data < new_node.data)
      current = current.next;

    new_node.next = current.next;
    current.next = new_node;
  }
}
