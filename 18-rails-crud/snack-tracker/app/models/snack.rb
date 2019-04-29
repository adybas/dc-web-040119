class Snack < ApplicationRecord

    def toggle_activate
        self.active = !(self.active)
        self.save
    end

end
