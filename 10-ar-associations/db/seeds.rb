Doctor.destroy_all
Patient.destroy_all
Hospital.destroy_all
DoctorPatient.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian", specialty: "Internal Medicine", hospital_id: sacred_heart.id)
turk = Doctor.find_or_create_by(name: "Chris Turk", specialty: "Surgery", hospital: sacred_heart)
elliot = Doctor.find_or_create_by(name: "Elliot Reed", specialty: "Endocrinology", hospital: sacred_heart)

mrs_wilke = Patient.find_or_create_by(name: "Mrs Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimers Patient")
miss_judy = Patient.find_or_create_by(name: "Miss Judy")

# jd.hospital = sacred_heart
# turk.hospital = sacred_heart
# elliot.hospital = sacred_heart
# jd.save
# turk.save
# elliot.save
# mrs_wilke.doctors << jd
# mrs_wilke.doctors << elliot