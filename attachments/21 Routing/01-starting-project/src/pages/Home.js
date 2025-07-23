import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
        {/* onder de motorkap rendered Link een anchor element (<a></a>) maar het luisterd naar kliks voor dat element voorkomt de browser default voor het zenden van een hTTP request als een link geklikt wordt en in plaats kijkt naar de route definities en updates de pagina en laad de gepaste content, het veranderd ook de URL maar zonder een nieuw HTTP request te sturen */}
      </p>
    </>
  );
}

export default HomePage;
