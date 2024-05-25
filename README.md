# Complete React.Js


# Parcel
- Dev Build => Build => Bundle => Minify => Optimize
- Local Server 
- HMR => Hot module Replacement => Live Reloading of the code changes in real time without any restart or build process.  Parcel is a bundler that lets you focus on building a great experience while Parcel takes care of the rest.   It's fast, zero configuration and integrates with most popular tools like webpack, babel etc...

- File Watching Algorithm - written in C++ 
- Caching - Faster Builds 
- Image Optimization 
- Minificatin
- Bundling 
- Compressing
- Consistent Hashing
- Code Splitting
- Differertial Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different build for dev and production bundlers
- browserslist

/* Required 
* Header
* - logo
  - Nav items
* Body
* - Search
  - RestaurantContainer
    - RestaurantCard
        - Name of restaurant
        - Star Rating
        - cuisine
        - delivery time
* Footer
  - Copyright
  - links
  - Address
  - Constact
*/

- not using keys(not acceptable) <<<<<<<< index as a key <<<<<< unique key(best practice)


There are two types of Exports/Imports
  - Default export / import
      export default <component name>; =====> import <component name> from '<path to component>'; 
  - Named export/ import
      export const <name for export> = <value for export>; ===> import { <name for export> } from '<path to component>' ;


# React Hooks
 (Normal Utility functions)
--> most important hooks
- useState()
- useEffect()