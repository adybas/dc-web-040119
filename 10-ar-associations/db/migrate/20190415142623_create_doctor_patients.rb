class CreateDoctorPatients < ActiveRecord::Migration[5.2]
  def change
    create_table :doctor_patients do |t|
        t.integer :doctor_id
        t.integer :patient_id
    end
  end
end
