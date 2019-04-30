class Snack < ApplicationRecord

    belongs_to :retailer
    
    # def toggle_activate
    #     self.active = !(self.active)
    #     self.save
    # end

end
