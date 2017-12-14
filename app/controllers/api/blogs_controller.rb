class Api::BlogsController < ApplicationController
  before_action :set_api_blog, only: [:show, :update, :destroy]

  # GET /api/blogs
  def index
    render json: Blog.all
  end

  # GET /api/blogs/1
  def show
    render json: @blog
  end

  # POST /api/blogs
  def create
    @blog = Blog.new(blog_params)

    if @blog.save
      render json: @blog, status: :created, location: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/blogs/1
  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/blogs/1
  def destroy
    @blog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def blog_params
      params.require(:blog).permit(:name, :body, :read)
    end
end
