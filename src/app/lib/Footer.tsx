import React from 'react';

function Footer() {
    return (
        <footer className={"flex bottom-0 p-4"}>
            <div className={'grid grid-cols-2 '}>

                <div>
                        <div className={'font-bold'}>Salesor</div>
                        <div>About</div>
                        <div>Documentation</div>

                </div>

                <div>
                        <div className={'font-bold'}>Collections</div>
                        <div>Summer Pick</div>
                        <div>Feature Products</div>

                </div>


            </div>
        </footer>
    );
}

export default Footer;