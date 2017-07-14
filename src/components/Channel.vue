<template>
    <div>
        <!-- 채널 비밀번호 확인 모달 start-->
        <modal name="modal"
               :width="500"
               :height="300">
            <div class="padding-30">
                <p class="h2 NGB text-center padding-top-20">Enter Password</p>
                <div v-if="configPassword">
                    <p class="h5 text-center padding-top-10 color-light is-active">입장하려면 비밀번호를 입력하세요..</p>
                </div>
                <div v-if="errorPassword == true" id="passwordIncorrectMsg" style="margin-bottom: -30px;">
                    <p class="h5 text-center NGB color-warning text-underline padding-top-10 ">
                        비밀번호가 틀렸습니다. 다시 한 번 확인해 주세요! </p>
                </div>
                <div class="columns is-12">
                    <input v-model="passwordKey" v-on:keyup.enter="configPassword" autofocus
                           class="input margin-left-30 margin-right-30 margin-top-50 "
                           type="password" placeholder="password..."/>
                </div>
                <div class="columns">
                    <div class="column is-12 text-center margin-top-10">
                        <button v-on:click="configPassword"
                                style="width: 92%;"
                                class="button width-100per is-primary is-outlined">인증
                        </button>
                    </div>
                </div>
            </div>
        </modal>
        <!-- 채널 비밀번호 확인 모달 End -->

        <!-- 닉네임 설정 모달 Start -->
        <modal name="setNicknameModal"
               :width="500"
               :height="300">
            <div class="padding-30">
                <p class="h2 NGB text-center padding-top-20">Set Nickname</p>
                <div>
                    <p class="h5 text-center padding-top-10 color-light is-active">채널에서 사용할 닉네임을 설정해 주세요.</p>
                </div>
                <div v-if="checkNull" style="margin-bottom: -30px;">
                    <p class="h5 text-center NGB color-warning text-underline padding-top-10 ">
                        닉네임은 최소 한글자 이상입니다. </p>
                </div>
                <div class="columns is-12">
                    <input v-model="nicknameKey" v-on:keyup.enter="logInChannel" autofocus="autofocus"
                           class="input margin-left-30 margin-right-30 margin-top-50 "
                           type="text" placeholder="your nickname..."/>
                </div>
                <div class="columns">
                    <div class="column is-12 text-center margin-top-10">
                        <button v-on:click="logInChannel"
                                style="width: 92%;"
                                class="button width-100per is-primary is-outlined">입장하기
                        </button>
                    </div>
                </div>
            </div>
        </modal>
        <!-- 닉네임 설정 모달 End -->
        <div id="in-channel-section">
            <div>
                <section class="hero is-light">
                    <div class="columns padding-top-15 padding-bottom-5">
                        <div class="column is-4">
                            <button class="button" v-on:click="this.clear">그림 지우기</button>
                            <button class="button" v-on:click="changeColor('#FFFFFF')"></button>
                            <button class="button is-danger" v-on:click="changeColor('#ff2b56')"></button>
                            <button class="button is-warning" v-on:click="changeColor('#ffdb4a')"></button>
                            <button class="button is-success" v-on:click="changeColor('#22c65b')"></button>
                            <button class="button is-primary" v-on:click="changeColor('#00c4a7')"></button>
                            <button class="button is-info" v-on:click="changeColor('#276cda')"></button>
                            <button class="button is-dark" v-on:click="changeColor('#2f2f2f')"></button>
                            <button class="button is-black" v-on:click="changeColor('#000000')"></button>
                        </div>
                        <div class="column is-3">
                            <span v-on:click="changePenSize('13')" class="icon is-large">
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </span>
                            <span v-on:click="changePenSize('9')" class="icon is-medium">
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </span>
                            <span v-on:click="changePenSize('5')" class="icon">
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </span>
                            <span v-on:click="changePenSize('1')" class="icon is-small">
                                <i class="fa fa-circle" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <div class="columns padding-top-10">
                <div class="left-box">
                    <div id="loading-process-bar" class="padding-20">
                        <progress class="progress is-warning" value="90" max="100">90%</progress>
                    </div>
                    <input v-on:change="onFileChange" type="file" id="fileUpload"/>

                    <canvas
                            v-on:mousedown="this.onMouseDown"
                            v-on:mousemove="this.onMouseMove"
                            v-on:mouseup="this.onMouseUp"
                            id="canvas"></canvas>
                </div>
                <div class="right-box">
                    <div class="chat column padding-0">
                        <div style="padding: 0!important;" class="padding-0">
                            <div class="inline-block">
                                <img class="width-50" src="../assets/ic_user.png"/>
                                <div class="inline-block vertical-align-top padding-left-10 padding-top-5">
                                    <span>nicknameKey</span>
                                </div>
                            </div>
                        </div>
                        <div class="padding-10">
                            <div class="chat-box">
                                <ul id="chat-log" class="chat-log">
                                    <li style="text-align: center" id="own-nickname">----- {{nicknameKey}}님이 입장하였습니다 -----
                                    </li>
                                    <li v-for="message in this.messages">
                                        {{message}}
                                    </li>
                                </ul>
                            </div>

                            <div class="chat-input-box">
                                <div class="field is-grouped chat-input-form">
                                    <p class="control is-expanded">
                                        <input class="input" type="text" placeholder="메세지를 입력하세요" autofocus
                                               v-model="chatMessage"
                                               v-on:keyup.enter="sendChat">
                                    </p>
                                    <p class="control">
                                        <a class="button is-info" v-on:click="this.sendChat">
                                            전송
                                        </a>
                                    </p>
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
    name: 'live_drawing_room',
    sockets: {
      connect: function () {
        console.log('connected')
      },
      drawing: function (data) {
        this.drawFromSocket(data)
      },

      clear: function () {
        this.canvasContext.clearRect(0, 0, this.canvasContext.canvas.width, this.canvasContext.canvas.height)
      },
      preDrawing: function (drawingData) {
        drawingData.forEach((drawing) => {
          drawing.forEach((data) => {
            this.drawFromSocket(data)
          })
        })
      },

      // 메세지 수신
      receiveMessage: function (message, nicknameKey) {
        this.messages.push(nicknameKey + ' : ' + message)
        console.log(nicknameKey)
      }
    },
    /**
     * 최초 실행하는 mounted. 변수선언
     */
    mounted: function () {
      this.ownNickname = document.getElementById('own-nickname').innerHTML
      this.canvas = document.getElementById('canvas')
      this.containerSection = document.getElementById('in-channel-section')
        /* canvas container */
      this.containerSection.style.display = 'none'
        /* canvas conatiner 입장 전 hide */
      this.canvasContext = this.canvas.getContext('2d')
      this.canvasContext.strokeStyle = '#3dff22'
      this.canvasContext.lineJoin = 'round'
      this.canvasContext.lineWidth = 5
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.show('modal')
      this.receiveNickname()
    },
    data () {
      return {
        /**
         * 데이터 초기화 (정의해줘야 변수 쓸 수 있음!!!!)
         */
        nicknameKey: '',
        passwordKey: '',
        isDrawingMode: false,
        savedDrawingData: [],
        chatMessage: '',
        messages: [],
        myCanvasColor: '',
        myCanvasPenSize: '',
        time: 0,
        duration: 5000, // 대기시간 조정
        errorPassword: false,
        checkNull: false
      }
    },
    methods: {
      receiveNickname () {
        this.nicknameKey.push()
        console.log('this')
        console.log('push nickname : ' + this.nicknameKey)
      },

      onFileChange (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files[0])
      },

      createImage (file) {
        const reader = new FileReader()
        const vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }
        reader.readAsDataURL(file)
      },

      show (modalName) {
        this.$modal.show(modalName)
      },

      hide (modalName) {
        this.$modal.hide(modalName)
      },

      configPassword (passwordKey) {
        if (this.passwordKey === '1234') {
          this.errorPassword = false
          this.hide('modal')

          this.show('setNicknameModal')
          this.setNickName()
        } else {
          this.errorPassword = true
          this.passwordKey = ''
        }
      },

      setNickName () {
        if (this.nicknameKey.type.string) {
          this.hide('setNicknameModal')
        }
      },

      logInChannel () {
        if (this.nicknameKey !== '') {
          this.hide('setNicknameModal')
          this.containerSection.style.display = 'block'
        } else {
          this.checkNull = true
        }
      },

      onMouseDown (event) {
        this.isDrawingMode = true
        this.appendDrawingData()
        this.canvasContext.beginPath()

        const x = event.pageX - this.canvas.offsetLeft
        const y = event.pageY - this.canvas.offsetTop
        const colorCode = this.canvasContext.strokeStyle
        const penSize = this.canvasContext.lineWidth

        console.log(colorCode)
        console.log(penSize)
        this.canvasContext.moveTo(x, y)
        this.saveLatestDrawingData(x, y, colorCode, penSize)

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'beginPath', position: {x, y}, size: penSize, color: colorCode})
      },

      drawFromSocket (data) {
        /**
         * 데이터 타입 정의 const { } = data 필수
         */
        const {type, position, size, color} = data

        switch (type) {
          case 'beginPath':
            this.canvasContext.beginPath()
            this.canvasContext.moveTo(position.x, position.y)
            this.canvasContext.strokeStyle = color
            this.canvasContext.lineWidth = size
            break

          case 'lineTo':
            this.canvasContext.lineTo(position.x, position.y)
            this.canvasContext.stroke()
            break

          case 'end':
            this.canvasContext.strokeStyle = this.myCanvasColor
            break
        }
      },

      onMouseMove (event) {
        if (!this.isDrawingMode) return

        const x = event.pageX - this.canvas.offsetLeft
        const y = event.pageY - this.canvas.offsetTop
        const colorCode = this.canvasContext.strokeStyle
        const penSize = this.canvasContext.lineWidth

        this.canvasContext.lineTo(x, y)
        this.canvasContext.stroke()

        this.saveLatestDrawingData(x, y, colorCode, penSize)

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'lineTo', position: {x, y}, size: penSize, color: colorCode})
      },

      onMouseUp (event) {
        this.isDrawingMode = false

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'end'})
      },

      appendDrawingData () {
        this.savedDrawingData.push([])
      },

      saveLatestDrawingData (x, y, colorCode, penSize) {
        this.savedDrawingData[this.savedDrawingData.length - 1].push({x, y, colorCode, penSize})
      },

      clear () {
        this.$socket.emit('clear')
      },

      changeColor (color) {
        this.canvasContext.strokeStyle = color
        this.myCanvasColor = color
      },

      changePenSize (penSize) {
        this.canvasContext.lineWidth = penSize
        this.myCanvasPenSize = penSize
      },

      redrawWithStep () {
        this.savedDrawingData.forEach(drawingData => {
          this.canvasContext.beginPath()

          for (let i = 0; i < drawingData.length; i++) {
            const {x, y} = drawingData[i]
            if (i === 0) {
              this.canvasContext.moveTo(x, y)
              continue
            }
            this.canvasContext.lineTo(x, y)
            this.canvasContext.stroke()
          }
        })
      },

      sendChat () {
        if (this.chatMessage === '') return console.error('비어있음')
        this.$socket.emit('sendMessage', this.chatMessage)
        this.$socket.emit('sendNickname', this.ownNickname)
        this.messages.push(this.nicknameKey + ' : ' + this.chatMessage)
        this.chatMessage = ''

        console.log(this.nicknameKey) // 여긴 잘 찍히는데......
      },
      modal () {
        let obj = {
          title: 'Alert Title',
          message: 'Alert Message',
          type: 'info'
        }
        this.$refs.simplert.openSimplert(obj)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../assets/variable";

    .name {
        width: 10%;
    }

    .message {
        width: 70%;
    }

    // 채팅박스
    .chat {
        height: 100%;
        background-color: #EAEAEA;
        bottom: 0;
        right: 0;
        text-align: left;
        overflow: scroll;

        &-log {
            width: 95%;
            padding: 10px;
        }

        &-input-form {
            position: fixed;
            padding: 10px;
            background-color: #D5D5D5;
            bottom: 1%;
            width: 23%;
        }

        &-box {
            height: 80%;
        }
    }

    .left-box {
        float: left;
        width: 75%;
    }

    .right-box {
        float: right;
        width: 35%;
    }

    .progress {
        transition: all 0.5s ease;
    }

</style>
