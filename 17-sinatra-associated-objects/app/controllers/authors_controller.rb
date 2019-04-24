class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"

    get "/authors" do 
        @authors = Author.all
        erb :index
    end


    get "/authors/new" do 
        # load the empty author page

        erb :new
    end

    post "/authors" do 
        # create the new author
        author = Author.create(name: params[:name])

        params[:book].each do |book_info|
            Book.find_or_create_by(title: book_info[:title],
                                   snippet: book_info[:snippet],
                                   author: author)
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do
        @author = Author.find(params[:id])
        erb :show
    end
end