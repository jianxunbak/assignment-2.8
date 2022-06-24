import { useLocation, NavLink } from 'react-router-dom';

function CustomLink({ to, ...props }) {
  const { search } = useLocation();
  // console.log('CustomLink->location', location)
  return (
    <NavLink to={to + search} {...props} />
  );
}

export default CustomLink;