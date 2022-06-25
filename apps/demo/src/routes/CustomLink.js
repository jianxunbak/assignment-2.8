import { useLocation, NavLink } from 'react-router-dom';

function CustomLink({ to, ...props }) {
  let location = useLocation();
  // console.log('CustomLink->location', location)
  return (
    <NavLink to={to + location.search} {...props} />
  );
}

export default CustomLink;