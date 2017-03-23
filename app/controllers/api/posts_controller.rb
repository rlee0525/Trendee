class Api::PostsController < ApplicationController
  def index
    @posts = current_user.posts
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = current_user.posts.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render json: @post
  end

  def search
    if params[:query]
      @posts = Post.all.where("LOWER(title) ~ LOWER(?)", params[:query])
    else
      @posts = Post.none
    end

    render :search
  end

  private

  def post_params
    params
      .require(:post)
      .permit(:title, :content, :user_id,
              :category, :subcategory, :address,
              :city, :state, :zipcode, :country,
              :created_at)
  end
end
