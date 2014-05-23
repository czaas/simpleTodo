// a todo list

function todoCtrl($scope){

	$scope.todos = [
		
	];
	
	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.clearFin = function(){
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};

	$scope.addTodo = function(){
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = " ";
	};

}