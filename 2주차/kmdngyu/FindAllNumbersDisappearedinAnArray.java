class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
      List<Integer> result = new ArrayList<>();
        for(int i =0; i<nums.length; i++){
            int a = Math.abs(nums[i])-1;
            if(nums[a]>0){
                nums[a] = -nums[a];
            }
        }
        for(int i =0; i<nums.length; i ++){
            if(nums[i]>0) {
                result.add(i+1);
            }
        }
        return result;
    }
}
