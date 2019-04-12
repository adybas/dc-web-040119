class Author

    attr_reader :name 
    attr_accessor :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
        # instantiate a new author and save to database
        author = Author.new(name)

        sql = "INSERT INTO authors (name, id) VALUES (?, ?)"
        DB.execute(sql, name)
        get_id = "SELECT last_insert_rowid()"
        id = DB.execute(get_id)[0][0]
        author.id = id 
        return author
    end

    def self.find(id)
        # Author.find(5) => <Author name=JudyBlume id=5>
        sql = "SELECT * FROM authors where id = ?"
        row = DB.execute(sql, id)[0]
        self.make_author_from_row(row)
    end

    def self.find_by_name(name)

        sql = "SELECT * FROM authors where name = ?"
        row = DB.execute(sql, name)[0]
        self.make_author_from_row(row)
    end

    def self.all
        #[[1, "Maya Angelou"], [2, "Zora Neale Hurston"], [3, "Tom Clancy"], [4, "Tom Clancy"], [5, "Judy Blume"]]

        sql = "SELECT * from authors"
        rows = DB.execute(sql)
        rows.map do |row|
            self.make_author_from_row(row)
        end
    end

    def self.make_author_from_row(row)
        Author.new(row[1], row[0])
    end
end