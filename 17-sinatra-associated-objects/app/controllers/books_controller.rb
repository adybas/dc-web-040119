class BooksController < Sinatra::Base

    set :views, "app/views/books"
    
    get "/books" do
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        erb :new
    end

    get "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    post "/books" do
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch "/books/:id" do
        @book = Book.find(params[:id])
        @book.update(title: params[:title],
                    author: params[:author],
                    snippet: params[:snippet])
        redirect "/books/#{@book.id}"
    end

    delete "/books/:id" do
        # binding.pry
        @book = Book.find(params[:id])
        @book.destroy
        redirect "/books"
    end
end