function power(arr) {
    var combos = [[]];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0, leng = combos.length; j < leng; j++) {
            console.log(j, combos.length)
            combos.push(combos[j].concat(arr[i]));
            
         
        }
    }

    console.log(combos.length);
}
 
power([1,2,3]);
