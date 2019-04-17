require 'pry'

class PalindromeChecker

    def is_palindrome?(str)
        raise ArgumentError if !(str.is_a? String)
        str.gsub!(/\W/, "")
        str.downcase!
        if str.length <= 1
          return true
        elsif str[0] == str[-1]
          return is_palindrome?(str[1...-1])
        else
          return false
        end
    end
end

