// Auth0ProviderWithHistory.jsx
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/", { replace: true });
  };

  return (
    <Auth0Provider
      domain="dev-pbjcccbbqutobnl6.us.auth0.com"
      clientId="i75wZWZSUUyNULU9chdrytFqbPuhvff9"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
};

