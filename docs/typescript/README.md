## Typescript

**수강한 강의**

[[강의] 타입스크립트로 블록체인 만들기](https://nomadcoders.co/typescript-for-beginners)

### readonly

```tsx
const player: {
  readonly name: string
  age: number
}

const names: readonly string[] = ["1", "2"]
```

readonly는 typescript 보호장치로 정의 시 변경이 불가하다.

### Tuple

```TSX
const player: [string, number, boolean] = ["seulhyi", 1, true]
```

### unknown

```TSX
let a:unknown;

if (typeof a === "number"){
    let b = a+1
}
```

### never

절대 return하지 않을 때, 즉 함수에서 예외가 발생할 때 사용한다.

```tsx
// 작동 안함
function hello(): never {
  return "X"
}

// 작동 함
function hello(): never {
  throw new Error("XXX")
}
```

## function

```tsx
function add(a: number, b: number) {
  return a + b
}

const add = (a: number, b: number) => a + b
```

### 오버로딩

오버로딩은 함수가 서로 다른 call signatures를 가지고 있을 때 발생시킨다.

### 제너릭

제너릭은 타입을 함수처럼 전달받는 문법이다.

어떤 타입이 올지 미리 정하지 않고 나중에 사용 시점 때 정한다는 것을 의미한다.

extends를 통해 제너릭이 아무 타입이나 받지 않게 제한할 수도 있다.

```tsx
function echo<T>(value: T) {
  return value
}

const x = echo("helo") // string
const y = echo(123) // number

interface Box<T> {
  value: T
}

// 특정 형태를 가진 타입만 허용할 때
// T는 반드시 length라는 속성을 가지고 있어야 한다.
function getLength<T extends { length: number }>(item: T) {
  return item.length
}

getLength("")
getLength([1, 2])

// 제너릭 기본값
// 사용자가 타입을 지정하지 않은 경우에만 string을 사용하겠다는 의미
interface ResponseData<T = string> {
  data: T
}

// T 객체의 key 값이 K
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// 확장
interface User {
  id: string
  name: string
}

interface UserRow extends User {
  rowId: number
  isSelected: boolean
}

type User = {
    id: string
    name: string
}

type WithMeta<T> = T & {
  rowId: number
  isSelected: boolean
}

type UserRow = WithMeta<User>

const row: UserRow = {
    id: "person1",
    name: "seulhyi",
    rowId: 1,
    isSelected: false
}

```

### 유니온

여러 타입 중 하나를 허용한다 라는 의미다.

즉, 변수 or 파라미터 or 속성이 여러 타입 중 하나가 될 수 있다.

### void

아무것도 반환하지 않는 함수는 void로 표현한다.

```tsx
// 맞는 문
function logMessage(message: string): void {
  console.log(message)
}

// 에러
function logMessage(message: string): void {
  return 123
}
```

### Promise

promise는 비동기 함수를 의미한다.

함수 호출한 후 값은 필요없지만 완료시점을 기다릴 수 있다는 것이다.

안적어도 자동으로 Promise로 래핑되지만 명확성을 위해 적는다.

### interface VS type

**표현 형태**

interface는 오직 객체 형태로만 표현한다.

type은 유니온 타입, 기본형 별칭, 함수타입 등으로 표현할 수 있다.

```tsx
type ID = string | number
type Pair = [string, number]
type Func = (x: number) => number
```

**병합**

interface는 병합이 가능하다.

type은 병합이 불가능하다.

실무에서는 API 모델, DTO의 경우 interface, 유니온 타입이나 튜플, 함수타입이면 type을 사용한다.

**interface**

```tsx
interface A {
  x: number
}
interface A {
  y: number
}

const a: A = { x: 1, y: 2 } // 가능
```

**type**

```tsx
type A = { x: number }
type A = { y: number } // 오류
```

**조합**

**interface**

```tsx
interface Person {
  name: string
}

interface Employee extends Person {
  salary: number
}
```

**type**

```tsx
type Person = { name: string }
type Employee = Person & { salary: number }
```

### Omit

특정 속성 제거

### Record

객체타입으로 만들 때