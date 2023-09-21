import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{textAlign: 'center', marginTop: '30%'}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i style={{color: 'grey'}}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}