class User < ApplicationRecord
    validates:firstname,{presence:true}
    validates:lastname,{presence:true}
    validates :mail,{presence:true,uniqueness:true}
    validates:password,{presence:true}
end
