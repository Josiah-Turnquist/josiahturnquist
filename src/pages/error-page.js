import { useRouteError } from "react-router-dom";
import { Typography } from '@mui/material';

// Theme
import theme from "../theme";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{textAlign: 'center', marginTop: '30%'}}>
      <Typography className="transition-all" variant="h3" color={theme.palette.primary.main} textAlign="center" marginTop="10px">
        Oops
      </Typography>
      <Typography className="transition-all" variant="h6" color={theme.palette.primary.main} textAlign="center" marginTop="10px">
        Sorry, an unexpected error has occurred
      </Typography>
      <p>
        <i style={{color: theme.palette.secondary.main}}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}