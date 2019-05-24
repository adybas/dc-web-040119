class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :quote
  has_many :hobbies
end
