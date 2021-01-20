var foo = function(func){
    func();
}

foo(function () {
    console.log('함수함수 인자로 전달 가능!');
});