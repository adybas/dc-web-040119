require 'sqlite3'
require 'pry'

# Create a new Database object that opens the given file
db = SQLite3::Database.new('chinook.db')

db.execute("select * from artists;")

multi_line = <<-SQL
  select * from artists;
SQL

db.execute(multi_line)
