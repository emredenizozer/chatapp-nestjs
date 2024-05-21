import { Link } from 'react-router-dom'
import { Link as MUILink } from '@mui/material'
import Auth from './Auth'

const Signup = () => {
  return (
    <>
      <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
        <MUILink component={Link} to={'/login'} style={{ alignSelf: "center" }}>
          Login
        </MUILink>
      </Auth>
    </>
  );
}

export default Signup
