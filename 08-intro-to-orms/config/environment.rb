require 'bundler'
Bundler.require

DB = SQLite3::Database.new('db/library.db')

require_relative '../lib/book.rb'
require_relative '../lib/author.rb'


# module SQLite3

#     class Database

#         def initialize(db_location)
#             @db_location = db_location
#         end

#         def other_methods

#         end

#     end
# end