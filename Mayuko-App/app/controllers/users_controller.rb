class UsersController < ApplicationController
    def index
        @user = User.all
        render json: @user
    end
    def show
          @user = User.find_by(id: params[:id])
          logger.debug('テスト２')
          render json: @user
    end
    
    def create
        @user = User.create(firstname: params[:firstname], 
                            lastname: params[:lastname],
                            mail: params[:mail],
                            password: params[:password])
        render json: @user
    end

    def signin
        logger.debug(params)
        @user = User.where(mail: params[:mail]).where(password: params[:password])
        
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update_attributes(name: params[:name])
        render json: @user
    end
    
    def destroy
        @user = User.find(params[:id])
        if @user.destroy
          head :no_content, status: :ok
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end
end
