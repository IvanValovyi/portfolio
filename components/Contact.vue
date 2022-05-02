<template>
    <div class="contact" id="contact">
        <h2 class="title">Contact</h2>
        <div class="contact_list">
            <a href="https://t.me/ivan_valovyi_37" class="one_contact" target="_blank">
                <svg>
                    <use xlink:href='~/assets/images/sprite.svg#telegram'></use>
                </svg>
                <p class="subtitle">Telegram</p>
            </a>

            <a href="mailto:ivan.valovyi.ffs@gmail.com" class="one_contact" target="_blank">
                <svg>
                    <use xlink:href='~/assets/images/sprite.svg#gmail'></use>
                </svg>
                <p class="subtitle">Gmail</p>
            </a>

            <nuxt-link to="/chat" class="one_contact">
                <svg>
                    <use xlink:href='~/assets/images/sprite.svg#chat'></use>
                </svg>
                <p class="subtitle">Write me</p>
            </nuxt-link>
        </div>
    </div>
</template>