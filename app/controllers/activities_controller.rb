class ActivitiesController < ApplicationController

  def edit
    @activity = Activity.find(params[:id])
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      redirect_to root_path
    else
      redirect_back fallback_location: root_path
    end
  end

  def update
    @activity = Activity.find(params[:id])
    complete = params[:activity][:complete]
    params[:activity][:complete] = (complete && complete == 'on') ? true : false
    @activity.update_attributes(activity_params)
    redirect_to root_path
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    redirect_to root_path
  end

  def replace
    move_id = params[:move_id]
    date_to_replace_with = Time.parse(params[:move]) rescue false
    if date_to_replace_with
      @updating = Activity.find(move_id)
      @updating.update_attribute(:date, date_to_replace_with)
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:title, :date, :start_time, :end_time, :user_id, :activity_type, :complete, :notes)
  end

end
