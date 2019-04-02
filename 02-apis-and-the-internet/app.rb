require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


def welcome_user
    # welcome the user 
    puts "Welcome user!  This is my book searcher!\n"
end

def get_search_term
    # get a search term
    puts "What would you like to search for?"
    search_term = gets.chomp
    return search_term
end

def get_book_info(search_term)
    # make a request to api to get book info
    url = GOOGLE_BOOKS_API_BASE_URL + search_term # todo:  handle spaces in search term
    response = RestClient.get(url)
    return response
end

def parse_book_info(response)
    # parse the book info
    # take each book and get the author, title, and description
    json = JSON.parse(response)
    json["items"].each do |book_info|
        title = book_info["volumeInfo"]["title"]
        author = parse_authors(book_info["volumeInfo"]["authors"]) 
        description = parse_description(book_info["volumeInfo"]["description"])

        show_book_info(title, author, description)
    end
end

def parse_authors(authors)
    #["Joe Johnson", "Mary Maryson"] >> "Joe Johnson & Mary Maryson"
    # if authors
    #     return authors.join(" & ")
    # else
    #     return "Author Unknown"
    # end
    authors ? authors.join(" & ") : "Author Unknown"
end

def parse_description(description)
    if description
        description = description[0..100] + "..."
    else 
        description = "We have no idea what this book is about."
    end
end

def show_book_info(title, author, description)
    puts "#{title} by #{author}: #{description}"
    puts "*************\n"
end

# display the book info

def main
    welcome_user
    search_term = get_search_term
    response = get_book_info(search_term)
    parse_book_info(response)

end

main()
# binding.pry
# "hi"