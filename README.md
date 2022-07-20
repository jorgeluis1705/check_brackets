# Programming Test:

## Instrucctions
------
Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. 



Please unit test with the following use cases (and any others you choose to ensure functionality):



## Test string - Expected result
------
```
{} - True

() - True

[] - True

[ - false

] - false

{ - false

} - false

}{ - False (closed bracket can't proceed all open brackets.)

{{} - False (one bracket pair was not closed)

"" - True. (no brackets in the string will return True) 

{abc...xyz} - True (non-bracket characters are ignored appropriately)

```


## How to run  
------

We only need [node js](https://nodejs.org/es/) js to run, i sued the v16.15.0 version 

If we have installed node on our computer we just need to open the terminal and run the following command

```
 $ node solution.js
```

And we can see in the terminal the results
