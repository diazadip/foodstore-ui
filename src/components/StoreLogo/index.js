import * as React from 'react';
//import env from "react-dotenv"

// (2) import Link
import { Link } from 'react-router-dom';
export default function StoreLogo() {
    return (
        <Link to="/">
            <div className="text-red-600 font-bold text-4xl">
                {process.env.REACT_APP_SITE_TITLE}
            </div>
        </Link>
    )
}