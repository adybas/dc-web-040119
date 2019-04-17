require_relative "../palindrome.rb"


describe "Palindrome Checker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'dad'" do 
        expect(checker.is_palindrome?('dad')).to be true
    end

    it "ignores spaces" do 
        expect(checker.is_palindrome?("taco cat")).to be true
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("madam i'm adam")).to be true
    end

    it "ignores case" do
        expect(checker.is_palindrome?("Abba")).to be true
    end

    it "returns false for 'banana'" do
        expect(checker.is_palindrome?("banana")).to be false
    end

    it "raises ArgumentError if input is not a string" do 
        expect{checker.is_palindrome?(["hi", "hello"])}.to raise_error ArgumentError
    end
end