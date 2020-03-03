class User < ApplicationRecord
    has_many :sales
    has_many :restaurants, through: :sales

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :username, uniqueness: true

    has_secure_password
end
