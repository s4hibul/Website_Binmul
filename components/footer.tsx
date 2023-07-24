"use client";
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="min-w-full flex flex-col justify-between ">
                <div className="text-center py-4 text-gray-500 h-1/5 bg-tosca " >
                    Ini footer
                </div>
                <div className='flex justify-between py-4 h-1/5 bg-dark'>
                    <div className='mx-12 lg:mx-24'>
                        copyright
                    </div>
                    <div className='mx-12 lg:mx-24 '>
                        <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-blue-500">
                        Link 1
                        </a>
                        <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-blue-500">
                        Link 2
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
