class RetailersController < ApplicationController

    def index
        @retailers = Retailer.all
    end

    def show
        @retailer = Retailer.find(params[:id])
    end

    def new
        @retailer = Retailer.new
        @retailer.snacks.build
    end

    def create
        @retailer = Retailer.create(retailer_params)
        if @retailer.errors.empty?
         # object was successfully created
            redirect_to retailer_path(@retailer)
        else 
            render :new
        end
    end

    private

    def retailer_params
        params.require(:retailer).permit(:name, :year_established,
            snacks_attributes: [:name, :calories, :deliciousness])
    end

end
