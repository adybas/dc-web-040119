- Migrations *must* have their class name and file name match
- Convention for models is `patient.rb` contains `Patient` model
- Start with Doctor / Hospital
- Then add Patient/DoctorPatient

```rb
class Patient < ActiveRecord::Base
    has_many :doctor_patients
    has_many :doctors, through: :doctor_patients
end

class Doctor < ActiveRecord::Base
    belongs_to :hospital
    has_many :doctor_patients
    has_many :patients, through: :doctor_patients
end

class Hospital < ActiveRecord::Base
    has_many :doctors
end

class DoctorPatient < ActiveRecord::Base
    belongs_to :doctor
    belongs_to :patient
end
```

## Migrations

```rb
class CreateDoctorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
        t.string :name
        t.integer :hospital_id
    end
  end
end

class CreateHospitalsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :hospitals do |t|
        t.string :name
    end
  end
end

class CreatePatientsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
        t.string :name
    end
  end
end


class CreateDoctorsPatientsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors_patients do |t|
        t.integer :doctor_id
        t.integer :patient_id
    end
  end
end

```
