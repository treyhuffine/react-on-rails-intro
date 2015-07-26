class ArticlesController < ApplicationController
  def create
    article = Article.create(article_params)

    render json: article
  end

  def index
    render json: Article.all
  end

  private

  def article_params
    params.require(:article).permit(:title, :link, :language, :published_at,
                                    :description, :author_name, :tags)
  end
end
