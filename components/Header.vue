<template>
    <header>
        <div class="profile">
            <img src="~/assets/images/my_photo.jpg" alt="Face">
            <div class="info">
                <h1 class="name">Ivan Valovyi</h1>
                <p class="position">Frontend developer</p>
            </div>
        </div>

        <nav>
            <ul class="main_links">
                <li>
                    <nuxt-link to="/about">About</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Contacts</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Skills</nuxt-link>
                </li><li>
                    <nuxt-link to="/about">Projects</nuxt-link>
                </li>
            </ul>
        </nav>

        <ul class="other_links">
            <li>
                <a href="#">Living examples of works</a>
            </li><li>
                <a href="#">Order a website</a>
            </li><li>
                <a href="#">Write me</a>
            </li>
        </ul>
    </header>
</template>