class Book

    attr_accessor :title, :author_id

    def initialize(title, author_id)
        @title, @author_id = title, author_id
    end

    def self.create
    end
end