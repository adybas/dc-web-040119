class RetailersController < ApplicationController

    def index
        @retailers = Retailer.all
    end

    def show
        @retailer = Retailer.find(params[:id])
    end
end
