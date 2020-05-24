var deleteDuplicates = function(head) {
    let cur = head;
    while(cur !== null) {
        if(cur.next === null) {
           break; 
        }
        if(cur.val === cur.next.val) {
            if(cur.next.next === null) {
                cur.next = null;
                break;
            }
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return head
};
