// a todo list

function todoCtrl($scope){
	$scope.totalTodo= 6;

	$scope.todos = [
		{text: "Learn AngularJS", done: false},
		{text: "Build an app", done: false}
	]
}