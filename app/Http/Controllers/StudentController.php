<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
	/*
    |--------------------------------------------------------------------------
    | addStudent
    |
    | Author    : Jainam Shah
    | Purpose   : to add new student
    | In Params : student details
    | Date      : 10th May, 2019
    |
    */
	public function addStudent(Request $request) {
		$insertStudent = Student::create($request->all());
		if($insertStudent) {
			return response()->json('Student added successfully');
		} else {
			return response()->json('Error in insertion');
		}
	}

	/*
    |--------------------------------------------------------------------------
    | students
    |
    | Author    : Jainam Shah
    | Purpose   : get list of all students
    | In Params : NA
    | Date      : 10th May, 2019
    |
    */
	public function students() {
		$data = Student::all();
		return response()->json($data);
	}

	/*
    |--------------------------------------------------------------------------
    | getStudent
    |
    | Author    : Jainam Shah
    | Purpose   : get student's data
    | In Params : student id
    | Date      : 10th May, 2019
    |
    */
	public function getStudent($id) {
		$data = Student::find($id);
		return response()->json($data);
	}

	/*
    |--------------------------------------------------------------------------
    | updateStudent
    |
    | Author    : Jainam Shah
    | Purpose   : update student's data
    | In Params : student id
    | Date      : 10th May, 2019
    |
    */
	public function updateStudent(Request $request) {
		$updateStudent = Student::where('id', $request->id)->update($request->all());
		if($updateStudent) {
			return response()->json('Student added successfully');
		} else {
			return response()->json('Error in update');
		}
	}

	/*
    |--------------------------------------------------------------------------
    | deleteStudent
    |
    | Author    : Jainam Shah
    | Purpose   : update student's data
    | In Params : student id
    | Date      : 10th May, 2019
    |
    */
	public function deleteStudent($id) {
		$deleteStudent = Student::where('id', $id)->delete();
		if($deleteStudent) {
			return response()->json('Student deleted successfully');
		} else {
			return response()->json('Error in delete');
		}
	}
}