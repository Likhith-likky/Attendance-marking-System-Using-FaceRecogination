import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://faceattendacerealtime-ed9c2-default-rtdb.firebaseio.com/"
})

ref = db.reference('Students')

data = {
    "11902981":
        {
            "name": "Benjamin Peter",
            "major": "Computer Science",
            "starting_year": 2019,
            "total_attendance": 0,
            "standing": "A",
            "year": 4,
            "last_attendance_time": "2023-03-26 15:50:12"
        },
    "11901982":
        {
            "name": "Likhith",
            "major": "Computer Science",
            "starting_year": 2019,
            "total_attendance": 0,
            "standing": "B",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        },
    "11901406":
        {
            "name": "Nirmal Reddy",
            "major": "Computer Science",
            "starting_year": 2019,
            "total_attendance": 0,
            "standing": "C",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        },
    "11902638":
        {
            "name": "Himanshu Singh",
            "major": "Computer Science",
            "starting_year": 2019,
            "total_attendance": 0,
            "standing": "D",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        },
    "11902637":
        {
            "name": "Vipul Yadav",
            "major": "Computer Science",
            "starting_year": 2019,
            "total_attendance": 0,
            "standing": "E",
            "year": 4,
            "last_attendance_time": "2022-12-11 00:54:34"
        }


}

for key, value in data.items():
    ref.child(key).set(value)
