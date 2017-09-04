class ActivitiesController < ApplicationController

  def edit
    @activity = Activity.find(params[:id])
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      redirect_to '/'
    else
      redirect_back fallback_location: root_path
    end
  end

  def update
    @activity = Activity.find(params[:id])
    @activity.update_attributes(activity_params)
    redirect_back fallback_location: root_path
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    redirect_back fallback_location: root_path
  end

  private

  def activity_params
    params.require(:activity).permit(:title, :date, :start_time, :end_time, :user_id, :activity_type, :complete, :notes)
  end

end
