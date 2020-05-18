package com.kmdgnyu;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        return assemble(s);
    }

    private static boolean assemble(String s) {
        List<Character> open = Arrays.asList('(', '{', '[');
        List<Character> close = Arrays.asList(')', '}', ']');
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            if (open.contains(s.charAt(i))) {
                stack.push(s.charAt(i));
            } else if (close.contains(s.charAt(i))) {
                char pair = open.get(close.indexOf(s.charAt(i)));
                if (stack.empty()) {
                    return false;
                }
                char lastPushed = stack.pop();
                if (lastPushed != pair) {
                    return false;
                }

            }
        }

        return stack.empty();
    }
}
