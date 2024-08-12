import React from 'react';

function Page() {
    return (
        <div className={'top-0'}>
            <div className={'flex flex-col items-center justify-center m-20 gap-y-4'}>
                <input className={'flex-col px-5 py-3 border-2 rounded-md'} type={'text'}  placeholder={'FirstName'} />
                <input className={'flex-col px-5 py-3 border-2 rounded-md'} type={'text'}  placeholder={'LastName'} />
                <input className={'flex-col px-5 py-3 border-2 rounded-md'} type={'text'}  placeholder={'Email'} />
                <input className={"flex-col px-5 py-3 border-2 rounded-md"} type={'password'}  placeholder={'Password'} />
                <input className={"flex-col px-5 py-3 border-2 rounded-md"} type={'password'}  placeholder={'Confirm Password'} />
                <button className={'bg-blue-300 rounded-md px-4 py-2'} type={'submit'}>Register</button>
            </div>
        </div>
    );
}

export default Page;