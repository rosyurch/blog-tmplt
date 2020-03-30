import { Link } from 'gatsby'
import React from 'react'
import Logo from "./logo"

const Header = () => (
    <header
        className="header"
        style={{
            backgroundColor: `#3149b1`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                <Logo />
            </Link>
        </div>
    </header>
)

export default Header
