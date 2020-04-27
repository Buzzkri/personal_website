class RecipesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    render json: @recipe
  end

  def create
    recipe = Recipe.new

    if recipe.save
      render json: recipe
    else
      render json: product.errors, status: 422
    end
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: 422
    end
  end

  def destroy
    @recipe.destroy
  end

  private
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:name)
  end
end
