from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.course_endpoints import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(CourseData,'/coursedata')
api.add_resource(OneCourseData,'/coursedata/<int:id>')
api.add_resource(UpdateCourseData,'/coursedata/<int:id>')
api.add_resource(AddCourseData,'/coursedata/')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('react4_schema.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask