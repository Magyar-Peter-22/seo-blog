import { useRouteError } from "react-router-dom";
import SEO from "../../../seo/SEO";

export default () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <SEO
                title="Error"
            />
            <h1>{error.status} - {error.statusText}</h1>
        </div>
    )
}