var arr = [1,
          false,
          {
              name: "Adam",
              address: "Provo"
          },
           function(name) {
               var greeting = "hello ";
               console.log(greeting + name);
           },
           "hello"
          ];

console.log(arr); //prints [1, false, obj, function, 'hello']
arr[3](arr[2].name); //passing the name property of the third item in the array to the fourth item in the array
