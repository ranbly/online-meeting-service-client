<template id="div-channel">
    <div class="margin-bottom-50">
        <div class="container">
            <div class=" padding-bottom-50 text-left">
                <div>
                    <section class="hero is-primary">
                        <div class="hero-body padding-left-50">
                            <h1 class="title h1 NGB">
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
                </div>

            </div>
            <div>
                <router-link v-bind:to="'/channel'">방금 방문한 채널로 이동하기</router-link>
                <div class="margin-top-20">
                    <div id="channel-div" class="columns is-multiline">
                        <div class="column is-6" v-for="channel in this.channels">
                            <div class="margin-bottom-5 card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{{channel.title}}</p>
                                            <p class="subtitle is-6">@yourName</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                        {{channel.content}}
                                        <a>{{channel.tag1}} </a>
                                        <a>{{channel.tag1}} </a>
                                        <a>{{channel.tag1}}</a>

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
                                        <p class="h1 padding-top-35">+ 채널 생성하기</p>
                                        <input type="text" v-model="addChannelTitle" placeholder="add channel title"/>
                                        <input type="text" v-model="addChannelContent"
                                               placeholder="add channel descriptions"/>
                                        <input type="text" v-model="addChannelTag1" placeholder="add tags"/>
                                        <!--<input type="text" v-model="addChannelTag2" placeholder="add tags"/>-->
                                        <!--<input type="text" v-model="addChannelTag3" placeholder="add tags"/>-->
                                        <button v-on:click="this.addChannel" class="btn">추가</button>
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
  export default {
    name: 'main',
    data: function () {
      return {
        addChannelTitle: '',
        addChannelContent: '',
        addChannelTag: '',
        channels: [
          {
            title: '당신의 첫번째 채널입니다!',
            content: '채널의 설명을 적어주세요',
            tag: '#html'
          }
        ]
      }
    },
    methods: {
      addChannel: function () {
        const newChannelTitle = this.addChannelTitle.trim()
        const newChannelContent = this.addChannelContent.trim()
        const newChannelTag1 = this.addChannelTag1.trim()
//        const newChannelTag2 = this.addChannelTag2.trim()
//        const newChannelTag3 = this.addChannelTag3.trim()

//        if (!newChannelTitle || !newChannelContent ||
//          !(newChannelTag1 || newChannelTag2 || newChannelTag3)) {
//          return
//        }
        this.channels.push({
          title: newChannelTitle,
          content: newChannelContent,
          tag1: '#' + newChannelTag1,
//          tag2: '#' + newChannelTag2,
//          tag3: '#' + newChannelTag3,
          done: false
        })

        // 입력 후 변수 초기화
        this.addChannelTitle = ''
        this.addChannelContent = ''
        this.addChannelTag1 = ''
//        this.addChannelTag2 = ''
//        this.addChannelTag3 = ''
      }
    }
  }
</script>

<style lang="scss">
    .make-channel {
        height: 180px !important;
    }
</style>
