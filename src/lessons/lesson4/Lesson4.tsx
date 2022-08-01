import React from 'react'
import './lesson_4';

const Lesson4 = () => {

    const handlePromise: any = {
        promise: null,
        resolve: null,
        reject: null,
        onSuccess(paramName: string) {console.log(`Promise is resolved with data: ${paramName}`)},
        onError(paramName: string) {console.log(`Promise is rejected with error: ${paramName}`)}
    }

    const createPromiseHandler = () => {
        handlePromise.promise = new Promise((res, rej) => {})
        handlePromise.resolve = handlePromise.promise.then(()=> {})
        handlePromise.reject = handlePromise.promise.catch(() => {})
    }

    const resolvePromiseHandler = () => {
        console.log(handlePromise.resolve)
    }

    const rejectPromiseHandler = () => {
        console.log(handlePromise.reject)
    }

    return (
        <div>
            <button onClick={createPromiseHandler} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvePromiseHandler} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectPromiseHandler} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;