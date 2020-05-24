class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode a = head;
        while(a!=null){
            if(a.next == null){
                break;
            }
            
            if(a.val == a.next.val && a.next.next!=null){
                a.next = a.next.next;
            } else if (a.val==a.next.val){
                a.next = null;
            }else {
                a = a.next;
            }   
            
        } 
        return head;
    }
}
