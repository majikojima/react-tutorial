import React, { useState } from 'react';

function DuplicateChecker(){
    const [nums, setNums] = useState([]);
    const [result, setResult] = useState(null);

    function handleChange(event){
        const value = event.target.value.split(',').map(num => parseInt(num, 10));
        setNums(value);
    }

    function containsDuplicate(nums){
        const hashset = new Set();

        for (let n of nums){
            if(hashset.has(n)){
                return true;
            }
            hashset.add(n);
        }
        return false;
    }

    function checkDuplicates(){
        setResult(containsDuplicate(nums));
    }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Enter numbers separated by comma" />
            <button onClick={checkDuplicates}>Check for Duplicates</button>
            {result !== null &&(
                <p>{result ? "There are duplicates." : "No duplicates found."}</p>
            )}
        </div>
    )
}

export default DuplicateChecker;