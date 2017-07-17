<template id="div-channel">
    <div class="margin-bottom-50">
        <div class="container">
            <div class="padding-bottom-50 text-left">
                <div class="relative">
                    <section class="hero is-primary absolute padding-right-45" style="
                                    border: 1px white solid; left:32%; top:30%; z-index: 1;">
                        <div class="hero-body padding-left-50 text-center">
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
                    <vue-particles style="position: relative; background-color: #00d1b2!important;"
                                   color="#dedede"
                                   :particleOpacity="1"
                                   :particlesNumber="80"
                                   shapeType="circle"
                                   :particleSize="5"
                                   linesColor="#ffffff"
                                   :linesWidth="1"
                                   :lineLinked="true"
                                   :lineOpacity="1"
                                   :linesDistance="150"
                                   :moveSpeed="2"
                                   :hoverEffect="true"
                                   hoverMode="grab"
                                   :clickEffect="true"
                                   clickMode="push">
                    </vue-particles>
                    <div class="relative">

                        <div id="main-tooltip" class="absolute padding-15 h5"
                             style="right: 3%; bottom: 3%; border-radius: 13px;color: white;background-color: #232323; z-index: 1;">
                            <p>이 초록색 캔버스 어디든 마우스로 클릭해 보세요!</p>
                            <div id="main-tooltip-triangle" class="absolute"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <router-link v-bind:to="'/channel'">방금 방문한 채널로 이동하기</router-link>
                <div class="margin-top-20">
                    <div class="columns is-multiline">
                        <div class="channel-div column is-6" v-for="channel in this.channels">
                            <div class="margin-bottom-5 card height-180">
                                <div class="channel-card card-content cursor">
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
                                        <small>{{ Date() }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="column is-6 make-channel">
                            <div class="margin-bottom-5 card">
                                <div class="card-content make-channel channel-card cursor">
                                    <div v-on:click="show" class="content">
                                        <p class="h1 padding-top-35 primary-color">+ 채널 생성하기</p>
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
                                                                        <input type="checkbox"><span
                                                                            class="padding-left-10 padding-top-5"> 비밀방</span>
                                                                    </label>
                                                                </p>
                                                            </div>
                                                            <p class="control is-expanded">
                                                                <input
                                                                       v-model="passwordKey"
                                                                       class="input"
                                                                       type="password"
                                                                       placeholder="비밀방으로 설정할시 패스워드를 입력해주세요">
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
        ],
        passwordKey: ''
      }
    },
    created () {
      this.$eventBus.$on('message', this.onReceive)
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

        this.channels.push({
          title: newChannelTitle,
          content: newChannelContent,
          tag1: '#' + newChannelTag1,

          done: false
        })

        // 입력 후 변수 초기화
        this.addChannelTitle = ''
        this.addChannelContent = ''
        this.addChannelTag1 = ''

        this.hide()

        console.log('password : ' + this.passwordKey)
        this.$eventBus.$emit('message', this.passwordKey)
      }
    }
  }
</script>

<style lang="scss">

    @import "../assets/variable";

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

    #main-tooltip {
        -webkit-animation: myfirst 0.7s linear 1s infinite alternate; /*normal;  Chrome, Safari, Opera */
        animation: myfirst 0.7s linear 1s infinite alternate; /*normal;  Standard syntax */

        /* Standard syntax */
        @keyframes myfirst {
            0% {
                opacity: 1;
                bottom: 20px;
            }
            100% {
                opacity: 1;
                bottom: 30px;
            }
        }
    }

    #main-tooltip-triangle {
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 30px solid #232323;
        border-radius: 3px;
        top: -35%;
    }

    //channel-card animation
    .channel-card {
        transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1); /* 여기서 속도를 지정*/
        &:hover { /* hover 시 속성 이벤트 */
            box-shadow: 0 0 1px 5px rgba(#00d1b2, 0.4),
            0 0 1px 10px rgba(#00d1b2, 0.1),
            0 0 1px 15px rgba(#00d1b2, 0.1);
        }
    }


</style>
