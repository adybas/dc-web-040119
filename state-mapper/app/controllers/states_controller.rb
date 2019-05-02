class StatesController < ApplicationController

    before_action :find_state, only: [:edit, :update, :show]
    
    def index 
        @states = State.all
        # render :index
    end

    def show
    end

    def new
        @state = State.new
        @state.cities.build
    end

    def create
        @state = State.new(state_params)
        if @state.invalid?
            render :new
        else
            @state.save
            redirect_to state_path(@state)
        end
    end 

    def edit
    end

    def update
        @state.update(state_params)
        if @state.invalid?
            render :edit
        else
            redirect_to @state
        end
    end

    def destroy
        State.delete(params[:id])
        redirect_to states_path
    end

    def find_state
        @state = State.find(params[:id])
    end

    private

    def state_params
        params.require(:state).permit(
            :name, :abbreviation, :bird, :year_founded,
            cities_attributes: [:name])
    end
end
