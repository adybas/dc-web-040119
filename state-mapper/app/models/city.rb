class City < ApplicationRecord
    belongs_to :state
    
    def state_name
        self.state.name
    end

end
