# 2.8: React Router

### Preparation

Clone and fork the starter code from `apps/begin`. Import the `react-router-dom` package:

```
npm i react-router-dom
```

### Lesson Overview

TBC


Routes from root `localhost:3000`

| Route name | Description |
|---|---|
| `/addproduct` | Show product entry page |
| `/view` | Show index route of all products in list | 
| `/view/:id` | Show details of product according to ID
| `/view?name=???` | Filter product by name |

## Part 1: Top Navigation Menu

### Step 1: Connect to the URL

In order to use the React Router package, import the `BrowserRouter` component and wrap it around the the JSX return block:

```js
// App.js
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    ...
    <BrowserRouter>
      Shopping Cart
    </BrowserRouter>
  );
}
export default App;
```

### Step 2: Add Header Links

Create a new component file called `routes/header.js` to include some links:

```js
// Header.js
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <nav>
        <Link to='/view'>View Product Details</Link> | {' '}
        <Link to='/add'>Add Product</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Header;

```

Import the new component into your app and test it:

```js
// App.js
...
function App() {
  return (
    ...
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
```

Click on the links and observe the URL in the address bar of your browser. 

Let's connect the links to some router functionality!

### Step 3: Add Routes

Create two new components in the `routes` directory:

```js
// View.js
function View() {
  return (
    <>
      <h2>View</h2>
    </>
  )
}
export default View;

// Add.js
function Add() {
  return (
    <>
      <h2>Add</h2>
    </>
  )
}
export default Add

```

Add them into the main app and configure them into the router:

```js
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';

function App() {
  return (
    ...
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='view' element={<View />} />
          <Route path='add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    ...
  );
}
```

Test out the new paths by clicking on the links. However, you will need to click
back button on your browser to get back to the *root* `/` URL path, which can be
quite tedious! 

### Step 4: Nested Routes

In navigation pages, it is common to have persistent layouts that are fixed as 
you click on links to view different pages. To implement persistant layout, you 
need to use *nested routes*:

```js
// App.js
    ...
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='view' element={<View />} />
            <Route path='add' element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
```

Now, the `Header` component has two children, `View` and `Add`. In order to 
conditionality render either child according to the selected route, we need
to import `<Outlet>` into the parent:

```js
// Header.js
import { Link, Outlet } from 'react-route-dom';
  ...
    <nav>
      ...
    </nav>
    <Outlet />
  ...
```

Click on the links to navigate to the desired URL and see the title change
bottom of the page, with a persistant header layout.

## Part 2: Side Bar Navigation

### Step 1: Listing Products

Let's create a sidebar where we can view the list products stored in our
shopping cart. The starter code includes dummy data which can be found in
`data.js`. Import the product list and display it on the `View` page,
together with some appropriate CSS styling for the sidebar navigation.

```js
// View.js
import styles from './View.module.css';
import { getProductList } from '../data';

function View() {
  let list = getProductList();
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <h2>View</h2>
        <nav className={styles.nav}>
          {list.map((item) => (
            <p>
              {item.name}
            </p>
          ))}
        </nav>
      </div>
    </div>
  );
}
export default View;
```

Convert each `<p>` element in the list into a `<NavLink>`, which is a special 
type of link that knows whether or not it is *active*. This is useful for
navigation menus where you would like to know which item is current selected.


```js
// View.js

import { NavLink } from 'react-router-dom';
    ...
      {list.map((item) => (
          <NavLink 
            className={ styles.link }
            to={`/view/${item.id}`}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
    ...  
```

The links are active, but the destination pages do not yet exist!

### Step 3: Adding a Default 'No Match' Route

Before we go on to create the specific product detail page, let's add a
a default page to show visitors when the router is not able match any
link to an existing page.

```js
// App.js
...
function App() {
  const DefaultPage = () => <p>Nothing to see here!</p>;
  return (
    ...
      <BrowserRouter>
        <Routes>
          ...        
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
  );
}
```

Test the default page by clicking on any of the item listed in the side bar 
or entering an invalid URL endpoint, e.g. `localhost:3000/nothing`.

### Step 4: Reading URL Params




### Step 5: Adding Index Routes

### Step 6: Adding Active Links

### Part 3: Additional Features

## Adding Search Params
- useSearchParams

## Creating Custom Links
- useLocation

## Navigating Programmatically 
- useParams, useNavigate, useLocation

## Part 3 - Insert Summary
