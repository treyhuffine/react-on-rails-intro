class ArticlesController < ApplicationController
  def create
    article = Article.create(article_params)

    render json: article
  end

  def index
    render json: Article.all
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy

    respond_to do |format|
      msg = { :status => "ok", :message => "Success!", :html => "<b>...</b>" }
      format.json  { render :json => msg }
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :link, :language, :published_at,
                                    :description, :author_name, :tags)
  end
end
