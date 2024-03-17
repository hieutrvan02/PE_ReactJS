import React from "react";

export default function MenuForm() {
    return (
        <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
            <div class="container">
                <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a class="nav-link" href="./"><span
                            class="fa fa-home fa-lg"></span>
                            Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-list fa-lg"></span> News</a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="./contactus"><span
                            class="fa fa-address-card fa-lg"></span> Contact</a></li>
                    </ul>

                    <div class="input-group col-3">
                        <input type="text" class="form-control" placeholder="Search" />
                        <div class="input-group-append w-3">
                            <button class="btn btn-success" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}