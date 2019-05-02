class CitiesController < ApplicationController

    def index
        @cities = City.all
    end

    def show
        @city = City.find(params[:id])
    end

    def new
        @city = City.new
    end

    def create
        city = City.create(city_params)
        redirect_to city_path(city)
    end

    private

    def city_params
        params.require(:city).permit(:name, :state_id, :capital?)
    end
end
