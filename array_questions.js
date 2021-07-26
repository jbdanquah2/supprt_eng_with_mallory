const arrayTask = (arry) => {
    const newArry = arry;
  
    if (arry.length == 0) return [];

    //sort the array and prints it out
    console.log('//sorting and printing the array...');
    console.log(newArry.sort((a,b) => a - b));


    //print out duplicates
    console.log('//printing out all duplicates...')
    for (let i = 0; i < newArry.length; i++) {
         if (newArry[i] == newArry[i + 1 ]) console.log(newArry[i]);
    }
    
    
    //print out missing numbers in sequence
    console.log('//printing out missing numbers in sequence...')
    for (let j = 0; j <= 67; j++) {
            if (!newArry.includes(j)) {
                if (j == 0) continue;
                console.log(j); 
            }   
    }

}

const myArray = [1,2,2,3,4,5,6,7,5,6,7,8,9,10,12,1,23,4,54,4,67,19,10]
arrayTask(myArray);