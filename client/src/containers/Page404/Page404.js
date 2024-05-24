import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Page404.scss"

const Page404 = () => {
    return (
        <div className="not-found">
            <div class="container">
                <div class="text-center">
                    <div class="four_zero_four_bg">
                        <h1 class="text-center ">404</h1>
                    </div>
                    <div class="contant_box_404">
                        <h3 class="h2">
                            Look like you're lost
                        </h3>

                        <p>the page you are looking for not avaible!</p>

                        <div className="action">
                            <Link className="btn btn-primary" to="/">
                                Go to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404