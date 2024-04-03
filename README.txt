#REACT course by NAMSTEDEV

# Parcel
- Dev build
- Local server
- HMR = Hot module replacement
- File Watching Algorithm - written in C++, responsible to update the server based on any changes in the files present in code directory
- Caching - Faster Builds 
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- diagnostic
- Good Error Handling
- HTTPs
- Tree Shaking - remove unused code for example : unused fuctions or methods
- Seperate Dev and Prod Bundles


# Food Ordering App

/**
 * Header
 *      Logo
 *      Nav items
 * 
 * Body
 *     > Restaurant Container
 *         > Restaurant Card
 *              -Img
 *              -Name of res, Star rating, Cuisine, Delivery Time
 * 
 * Footer
 *      Copyrights
 *      Links
 *      Address
 *      Contact
 */



Two types of Export/Import

    -Default Export/Import

         export default ComponentName;

         import ComponentName from "filePath";

    -Named Export/Import

        export const ComponentName;

        import {ComponentName} from "filePath";



# React Hooks
(Normal JS utility functions)

- useState() - Super powerful state variables in react
- useEffect() - 