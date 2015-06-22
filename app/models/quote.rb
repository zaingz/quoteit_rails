class Quote < ActiveRecord::Base
  belongs_to :user

  def destroy(id)
    super() if self.user.id == id
  end


end
