function outer(greeting, msg="It's a fine day to learn") { // 2
    const innerFunction =  function(name, lang="Python") { // 3
      return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    }
    return innerFunction("student", "JavaScript"); // 5
}

outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript" 

/*

1. We call outer, passing "Hello" as an argument.

2. The argument ("Hello") is saved in outer's greeting parameter. The other parameter, msg, is set to a default value.

3. Here's our old friend the function expression. It expects two arguments, to be stored in the parameters name and lang, and lang is assigned the default value of "Python". The function expression itself is saved in the local variable innerFunction.

4. Inside innerFunction we make use of its parameters, name and lang, as well as the greeting and msg parameters defined in innerFunction's containing (parent) function, outer. innerFunction has access to those variables via the scope chain.

5. Finally, inside outer, we invoke innerFunction, passing arguments that get stored in innerFunction's name and lang parameters.

*/