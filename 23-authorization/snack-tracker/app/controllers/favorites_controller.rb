class FavoritesController < ApplicationController

    before_action :authorized
    
    def new
    end

    def create
        snack_ids = params[:snack_ids]
        snack_ids.each do |id|
            new_snack = Snack.find(id)
            get_current_user.snacks << new_snack
        end
        redirect_to snacks_path
    end
end
