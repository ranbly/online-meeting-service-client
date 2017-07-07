<template>
    <div>
        <div class="container">
            <div class=" padding-bottom-50 text-left">
                <div>
                    <section class="hero is-medium is-primary is-bold">
                        <div class="hero-body padding-left-50">
                            <h1 class="title h1">
                                실시간 온라인 회의 보조 서비스
                            </h1>
                            <h2 class="subtitle">
                                Meet-me-by-drawing
                            </h2>
                            <div class="padding-top-20">
                                <a class="button is-outlined is-medium">채널 만들기</a>
                            </div>
                        </div>

                    </section>
                    <!--<p class="h1 bold">-->
                    <!--실시간 온라인 회의 보조 서비스<br>-->
                    <!--</p>-->
                    <!--<p>-->
                    <!--Meet-me-by-drawing-->
                    <!--</p>-->
                </div>

            </div>
            <div>
                <router-link v-bind:to="'/channel'">방금 방문한 페이지로 이동하기</router-link>
                <div class="margin-top-20">
                    <div class="columns">
                        <div id="channel-temp" class="column is-6">
                            <router-link v-bind:to="'/channel'">
                                <div class="margin-bottom-5 card">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="http://bulma.io/images/placeholders/96x96.png"
                                                         alt="Image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4">팀 프로젝트 회의</p>
                                                <p class="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                            <a>#css</a> <a>#responsive</a>
                                            <br>
                                            <small>11:09 PM - 1 Jan 2016</small>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="column is-6">
                            <div class="margin-bottom-5 card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">팀 프로젝트 회의</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                        <a>#css</a> <a>#responsive</a>
                                        <br>
                                        <small>11:09 PM - 1 Jan 2016</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="columns">
                        <div class="column is-6">
                            <div class="margin-bottom-5 card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">팀 프로젝트 회의</p>
                                            <p class="subtitle is-6">@johnsmith</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                        <a>#css</a> <a>#responsive</a>
                                        <br>
                                        <small>11:09 PM - 1 Jan 2016</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-6 make-channel">
                            <div class="margin-bottom-5 card">
                                <div class="card-content make-channel">
                                    <div class="content">
                                        <p class="h1 padding-top-35">채널 생성하기</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
    .make-channel {
        height: 180px !important;
    }
</style>
