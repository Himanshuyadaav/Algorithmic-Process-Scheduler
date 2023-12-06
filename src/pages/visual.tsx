
/*import React, { useEffect, useState } from 'react';
import { anotherVariable } from '../components/Output/GanttChart';

const Visual: React.FC = () => {
    interface Dictionary {
        [key: string]: number;
      }
      const dict:Dictionary={};
      for(const it of anotherVariable )
      {
         dict[it.job]=it.stop
      }
      console.log(dict);
      interface Dictionary1{
        [key: number]: string;
      }
      const dict1:Dictionary1={};
      for (const key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
          const value = dict[key];
          dict1[value]=key;
          
        }
      }
      console.log(dict1);
      const objectSize = Object.keys(dict).length;
      const startCharCode = 'A'.charCodeAt(0);
      const endCharCode = startCharCode + objectSize - 1;
      const length=objectSize;
      
      let initial = Array.from({ length  }, (_, index) =>
        String.fromCharCode(startCharCode + index)
      );
      console.log(initial);




  const [counter, setCounter] = useState<number>(anotherVariable[0].start);
  const [curr, setCurr] = useState<string>(anotherVariable[0].job);
  const [myArray, setMyArray] = useState<string[]>([]);
  const[left, setLeft] = useState<string[]>(initial);
  


  let it=0;

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter until it reaches the stop value
      if (counter <= anotherVariable[anotherVariable.length-1].stop+1) {
        setCounter((prevCounter) => prevCounter + 1);
        // Update the current job based on the time interval
        while (
            it < anotherVariable.length &&
            !(anotherVariable[it].start <= counter+1 && anotherVariable[it].stop >= counter+1)
          ) {
            it++;
          }
          if (Object.prototype.hasOwnProperty.call(dict1, counter))
          {
             
            const indexToDelete: number = left.indexOf(dict1[counter]);

            if (indexToDelete !== -1) {
              // Use splice to remove the element at the specified index
              left.splice(indexToDelete, 1);
            }
            myArray.push(dict1[counter]);

            setMyArray(()=>{
               return(myArray);
            })
           setLeft(()=>{
               return(left);
           })

           
          }
        
        setCurr((curr) =>{
            return anotherVariable[Math.min(it, anotherVariable.length - 1)].job
        });
        
             
     
        
      } else {
        // Stop the interval when the counter reaches the stop value
        clearInterval(interval);
      }
    }, 3000); // Update the counter every 1000 milliseconds (1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [counter,curr,myArray,left]);

  return (
    <div>
      <h1>New Page</h1>
      <p>Clock starts from {anotherVariable[0].start} to {anotherVariable[anotherVariable.length-1].stop+2}</p>
      <p>Counter: {counter}</p>
      <p>current job is:{curr}</p>
      <div>
      <h1>pjobs who are done</h1>
      <ul>
        {myArray.map((itr) => (
          <li >
             {itr}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h1>jobs who are left</h1>
      <ul>
        {left.map((itr) => (
          <li >
             {itr}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Visual;*/
import React, { useEffect, useState } from 'react';
import { anotherVariable } from '../components/Output/GanttChart';
import styles from './Visual.module.css'; // Import the CSS file

const Visual: React.FC = () => {
    interface Dictionary {
        [key: string]: number;
      }
      const dict:Dictionary={};
      for(const it of anotherVariable )
      {
         dict[it.job]=it.stop
      }
      console.log(dict);
      interface Dictionary1{
        [key: number]: string;
      }
      const dict1:Dictionary1={};
      for (const key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
          const value = dict[key];
          dict1[value]=key;
          
        }
      }
      console.log(dict1);
      const objectSize = Object.keys(dict).length;
      const startCharCode = 'A'.charCodeAt(0);
      const endCharCode = startCharCode + objectSize - 1;
      const length=objectSize;
      
      let initial = Array.from({ length  }, (_, index) =>
        String.fromCharCode(startCharCode + index)
      );
      console.log(initial);




  const [counter, setCounter] = useState<number>(anotherVariable[0].start);
  const [curr, setCurr] = useState<string>(anotherVariable[0].job);
  const [myArray, setMyArray] = useState<string[]>([]);
  const[left, setLeft] = useState<string[]>(initial);
  


  let it=0;

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter until it reaches the stop value
      if (counter <= anotherVariable[anotherVariable.length-1].stop+1) {
        setCounter((prevCounter) => prevCounter + 1);
        // Update the current job based on the time interval
        while (
            it < anotherVariable.length &&
            !(anotherVariable[it].start <= counter+1 && anotherVariable[it].stop >= counter+1)
          ) {
            it++;
          }
          if (Object.prototype.hasOwnProperty.call(dict1, counter))
          {
             
            const indexToDelete: number = left.indexOf(dict1[counter]);

            if (indexToDelete !== -1) {
              // Use splice to remove the element at the specified index
              left.splice(indexToDelete, 1);
            }
            myArray.push(dict1[counter]);

            setMyArray(()=>{
               return(myArray);
            })
           setLeft(()=>{
               return(left);
           })

           
          }
        
        setCurr((curr) =>{
            return anotherVariable[Math.min(it, anotherVariable.length - 1)].job
        });
        
             
     
        
      } else {
        // Stop the interval when the counter reaches the stop value
        clearInterval(interval);
      }
    }, 3000); // Update the counter every 1000 milliseconds (1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [counter,curr,myArray,left]);
  return (
    <div className={styles.visualContainer}>
      <h1>visualising Page</h1>
      <p>Clock starts from {anotherVariable[0].start} to {anotherVariable[anotherVariable.length - 1].stop + 2}</p>
      <div className={styles.counterSection}>
        <p>Counter: {counter}</p>
        <div className={styles.counterImage} />
      </div>
      <div className={styles.statusSection}>
        <p>Current Job: {curr}</p>
        <div className={styles.jobsSection}>
          <div className={styles.doneJobs}>
            <h1>Jobs Done</h1>
            <ul className={styles.jobsList}>
              {myArray.map((itr, index) => (
                <li key={index}>{itr}</li>
              ))}
            </ul>
          </div>
          <div className={styles.leftJobs}>
            <h1>Jobs Left</h1>
            <ul className={styles.jobsList}>
              {left.map((itr, index) => (
                <li key={index}>{itr}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
  


  


export default Visual;

