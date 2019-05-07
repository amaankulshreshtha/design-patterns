# Module Reveal Patterm

## Pros

-	Everything from module pattern
- All members can interact with each other

## Cons

- The document becomes final, can't override anything in the returned object, because the values(public methods) assigned to the properties inside the object will no longer be accessible as it lives inside the scope of the function. Nor will be able to access the private variables. Can't really override the definition after that as we only have the reference to the public method inside the returned object.