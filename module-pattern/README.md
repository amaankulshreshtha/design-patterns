# Module Patterm

## Pros

- Gives private variables and methods
- Definitions can't be modified

## Cons

- Private functions can't interact with public functions
- Public functions need to use the namespace to interact with each other. If we decide to change a public method to a private method, then we might run into `RefernceError`s
- Newly added public functions can't interact with private variables
```javascript
  chatModule.test = function() {
		// Can't access private members
	}
```
