---

---

# TypeScript Examples


## <a name='log-to-screen'></a>Log to screen

```typescript
console.log("Hello World!");
```


## <a name='array-for-loop'></a>Array For Loop

```typescript
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```



## <a name='function-with-return-value'></a>Function with return value

```typescript
function add(a: number, b: number): number {
    return a + b;
}

const result: number = add(2, 3);
console.log(result); ## Output: 5
```


## <a name='create-an-object-from-an-interface-and-print-a-value'></a>Create an object from an interface and print a value

```typescript
type Person = {
    name: string;
    age: number;

};

const person: Person = {
    name: 'John Doe',
    age: 30,

};

console.log(person.name);
```


## <a name='loop-through-an-array-of-strings-and-echo-each-one'></a>Loop through an array of strings and echo each one

```typescript
const names: string[] = ['John', 'Jane', 'Jim'];

for (const name of names) {
  console.log(name);
}
```