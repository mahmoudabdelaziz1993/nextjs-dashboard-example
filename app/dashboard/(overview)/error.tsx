'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error.message);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center bg-red-100 rounded-md">
            <h2 className="text-center text-red-500">{error.message ?? "Something went wrong"}</h2>
            <button
                className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-400"
                onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}