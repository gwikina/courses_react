from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

class CourseData(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
        result = exec_get_all("SELECT Courses.*, Department.name, College.name FROM Courses INNER JOIN Department ON Courses.dept_id = Department.ID INNER JOIN College ON Department.ID = College.ID;");
        return result
class OneCourseData(Resource):
    def get(self, id):
    # NOTE: No need to replicate code; use the util function!
        result = exec_get_all(f"SELECT Courses.*, Department.name, College.name FROM Courses INNER JOIN Department ON Courses.dept_id = Department.ID INNER JOIN College ON Department.ID = College.ID WHERE Courses.id={id}");
        return result
class UpdateCourseData(Resource):
    def put(self, id):
    # NOTE: No need to replicate code; use the util function!
        parser = reqparse.RequestParser()
        parser.add_argument('new_name', type = str)
        parser.add_argument('new_desc', type = str)
        parser.add_argument('new_detail', type = str)
        parser.add_argument('new_dept', type = int)


        args = parser.parse_args()
        new_name = args['new_name']
        new_desc = args['new_desc']
        new_detail = args['new_detail']
        new_dept = args['new_dept']

        sql = f"""
                        Update Courses 
                        SET name = %s,
                        c_desc = %s,
                        details = %s,
                        dept_id = %s
                        WHERE id= %s;
                    """
        return exec_commit(sql, (new_name, new_desc, new_detail, new_dept, id))


class AddCourseData(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('new_name', type = str)
        parser.add_argument('new_desc', type = str)
        parser.add_argument('new_detail', type = str)
        parser.add_argument('new_dept', type = int)
        
        args = parser.parse_args()
        new_name = args['new_name']
        new_desc = args['new_desc']
        new_detail = args['new_detail']
        new_dept = args['new_dept']

        sql = f"""
                INSERT INTO courses(name, c_desc, details, selected, dept_id)	
        VALUES (%s, %s, %s, FALSE, %s);
             """
        return exec_commit(sql, (new_name, new_desc, new_detail, new_dept))

