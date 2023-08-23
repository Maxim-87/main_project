import {useEffect, useState} from "react";
import {Button} from "shared/ui/Button/Button";

// Component for testing ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])

    return (
        <div>
            <Button
                onClick={throwError}>
                Error
            </Button>
        </div>
    );
};

