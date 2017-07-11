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
                    <div class="columns is-multiline">
                        <div class="channel-div column is-6" v-for="channel in this.channels">
                            <div class="margin-bottom-5 card height-180">
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
                                        <p style="max-height: 100px" class="channel-list-content margin-bottom-0">
                                            {{channel.content}}
                                        </p>
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
                                        <p v-on:click="show" class="h1 padding-top-35"><a>+ 채널 생성하기</a></p>
                                    </div>

                                    <!-- 채널 생성 modal -->
                                    <modal name="make-channel-modal"
                                           :width="700"
                                           :height="550">
                                        <div class="padding-30">
                                            <div>
                                                <p class="h1 NGB text-center padding-top-20">새로운 채널 만들기</p>
                                                <p class="h4 text-center padding-top-10">채널을 만들어 링크를 공유해보세요</p>
                                            </div>
                                            <div style="margin-left: -90px"
                                                 class="make-channel-forms field padding-top-40">
                                                <div class="make-channel-forms field is-horizontal">
                                                    <div class="field-label is-normal">
                                                        <label class="label">제목</label>
                                                    </div>
                                                    <div class="field-body">
                                                        <div class="field is-grouped">
                                                            <p class="control is-expanded has-icons-left">
                                                                <input v-model="addChannelTitle" class="input"
                                                                       type="text" placeholder="채널의 이름을 알려주세요">
                                                                <span class="icon is-small is-left"><i
                                                                        class="fa fa-user"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="make-channel-forms field is-horizontal">
                                                    <div class="field-label is-normal">
                                                        <label class="label">설명</label>
                                                    </div>
                                                    <div class="field-body">
                                                        <div class="field is-grouped">
                                                            <p class="control is-expanded has-icons-left">
                                                                <input v-model="addChannelContent" class="input"
                                                                       type="text" placeholder="어떤 채널인지 간단히 설명해주세요">
                                                                <span class="icon is-small is-left"><i
                                                                        class="fa fa-user"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="make-channel-forms field is-horizontal">
                                                    <div class="field-label is-normal">
                                                        <label class="label">태그</label>
                                                    </div>
                                                    <div class="field-body">
                                                        <div class="field is-grouped">
                                                            <p class="control is-expanded has-icons-left">
                                                                <input v-model="addChannelTag1" class="input"
                                                                       type="text" placeholder="채널을 나타내는 태그를 적어주세요">
                                                                <span class="icon is-small is-left"><i
                                                                        class="fa fa-user"></i></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="make-channel-forms field is-horizontal">
                                                    <div class="field-label is-normal is-left">
                                                        <label class="label">암호</label>
                                                    </div>
                                                    <div class="field-body is-right">
                                                        <div class="field is-grouped">
                                                            <div class="padding-right-20">
                                                                <p class="control">
                                                                    <label class="checkbox padding-top-5">
                                                                        <input type="checkbox"><span class="padding-left-10 padding-top-5"> 비밀방</span>
                                                                    </label>
                                                                </p>
                                                            </div>
                                                            <p class="control is-expanded">
                                                                <input class="input"
                                                                       type="password" placeholder="비밀방으로 설정할시 패스워드를 입력해주세요">
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button v-on:click="this.addChannel"
                                                    class="button is-primary is-large width-100per">
                                                채널생성
                                            </button>
                                        </div>
                                    </modal>
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
        addChannelTag1: '',
        channels: [
          {
            title: '당신의 첫번째 채널입니다!',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tag1: '#responsive'
          }
        ]
      }
    },
    methods: {
      show () {
        this.$modal.show('make-channel-modal')
      },

      hide () {
        this.$modal.hide('make-channel-modal')
      },

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

        this.hide()
      }
    }
  }
</script>

<style lang="scss">
    .make-channel {
        height: 180px !important;
    }

    .make-channel-forms {
        padding-bottom: 20px;
    }

    .channel-list-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
