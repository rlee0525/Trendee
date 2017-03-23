class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, following_id: params[:user_id])
    @follow.destroy
    render :show
  end

  private

  def follows_params
    params.require(:follow).permit(:following_id)
  end
end
