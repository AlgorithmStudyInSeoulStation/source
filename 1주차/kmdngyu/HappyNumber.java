package com.kmdgnyu;

import java.util.ArrayList;
import java.util.List;

public class HappyNumber {
    public static boolean isHappy(int input) {
        List<Integer> cache = new ArrayList<>();
        return getIsHappy(input, cache);
    }

    private static boolean getIsHappy(int input, List<Integer> cache) {
        if (input == 1) {
            return true;
        }
        List<Integer> numbers = new ArrayList<>();
        int maxDigit = 10;
        for (int i = maxDigit; i >= 0; i--) {
            int digit = (int) Math.pow(10, i);
            int quotient = input / digit;
            if (quotient > 0) {
                numbers.add(quotient);
                input = input - quotient * digit;
            }
        }
        int sum = 0;
        for (Integer number : numbers) {
            sum += number * number;
        }
        if (cache.contains(sum)) {
            return false;
        } else {
            cache.add(sum);
        }
        return getIsHappy(sum, cache);
    }
}
