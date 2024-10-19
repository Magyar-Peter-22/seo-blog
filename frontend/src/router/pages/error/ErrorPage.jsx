import { useRouteError } from "react-router-dom";

export default () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>{error.status} - {error.statusText}</h1>
        </div>
    )
}