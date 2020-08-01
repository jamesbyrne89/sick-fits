import ErrorMessageStyles from './ErrorMessageStyles';

interface Error {
    message: string;
    networkError?: {
        result: {
            errors: Error[];
        };
    };
}

interface DisplayErrorProps {
    error: Error;
}

const DisplayError = ({ error }: DisplayErrorProps): JSX.Element[] | JSX.Element | null => {
    if (!error || !error.message) return null;
    if (error?.networkError?.result && error.networkError.result.errors.length) {
        return error.networkError.result.errors.map((error: Error, i: number) => (
            <ErrorMessageStyles key={i}>
                <p data-test="graphql-error">
                    <strong>Shoot!</strong>
                    {error.message.replace('GraphQL error: ', '')}
                </p>
            </ErrorMessageStyles>
        ));
    }
    return (
        <ErrorMessageStyles>
            <p data-test="graphql-error">
                <strong>Shoot!</strong>
                {error.message.replace('GraphQL error: ', '')}
            </p>
        </ErrorMessageStyles>
    );
};

export default DisplayError;
