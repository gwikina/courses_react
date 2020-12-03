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
class UpdateCourseData(Resource):
    def put(self, id):
    # NOTE: No need to replicate code; use the util function!
        conn = connect()
        cur = conn.cursor()
        parser = reqparse.RequestParser()
        parser.add_argument('fields', type=dict, location='json')
        args = parser.parse_args()
        if type(args['fields']['value']) == type(''):
            cur.execute(f"UPDATE courses SET {args['fields']['name']}='{args['fields']['value']}' WHERE id={id}")
        else:
            cur.execute(f"UPDATE courses SET {args['fields']['name']}={args['fields']['value']} WHERE id={id}")
        conn.commit()
        conn.close()
        return exec_get_all("SELECT * FROM courses WHERE selected=TRUE")


class SelectedCourseData(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
       result = exec_get_all(f"SELECT * FROM courses WHERE selected='True'");
       return result

