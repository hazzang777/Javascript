var arr = ['zero', 'one', 'two'];
console.log(arr.length);

// 프로퍼티 동적 차가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr);

for(var prop in arr){
    console.log(prop, arr[prop]);
}

for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}