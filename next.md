### Pre-rendering
- initial rendering in the server

***
### `useEffect`
- client side rendering
- can only render in functional component

***
### `getServerSideProps`

- cant be used in non-page component
- is executed when receiving a request. (The initial load can be called as request because of its url typing in the address bar)

## TailwindCss
1. Dont forget to include in `content` of `tailwind.config.js` file, even if you are using a `.js` file only to store `tailwind class` string for shorthand to use.
```js
// in styles/index.js
export default {
  flexCenter: 'flex justify-center items-center',
  unchecked: 'border-[#4D5B9E] hover:bg-[hsl(54,100%,91%)] hover:border-[hsl(54,100%,30%)]',
  checked: 'bg-[#D6DBF5]',
  // ... just for storing tailwind class string
};


// in tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,jsx}',   // <---------- Dont forget to include
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Ref
- [ref (react doc)](https://reactjs.org/docs/forwarding-refs.html)
-

 `createRef()`
```jsx
// creating a `ref` in a component 
const ref = React.createRef();
// and you can pass ref to child like that
<FancyButton ref={ref}>Click me!</FancyButton>;


// ===== But that is what react says: =====
// 1. The second ref argument only exists when you define a component with React.forwardRef call.
// 2. Regular function or class components don’t receive the ref argument, 
// 3. and ref is not available in props either.
// i.e. If you want to use ref in a passed component, you must define the passed component with React.forwardRef().

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));


// ===== Conclusion: =====
// => pass `ref` to the child as ref 
// => use it as the second argument of React.forwardRef call



```