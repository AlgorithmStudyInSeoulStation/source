class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> hashSet = new LinkedHashSet<>();
        while(!hashSet.contains(n)) {
            hashSet.add(n);
            int sum = 0;
            while(n > 0){
                sum += (n % 10) * (n % 10);
                n /= 10;
            }
            n = sum;
        }
        return n == 1;
    }
}
