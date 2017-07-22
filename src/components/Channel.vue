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
          <div class="container">
            <div class="columns padding-top-15 padding-bottom-5">
              <div class="column is-2 text-left">
                <router-link v-bind:to="'/main'">
                  <button class="button">
                                    <span class="icon"><i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    </span>
                    <p>방 나가기</p>
                  </button>
                  <div v-for="item in list">
                    <div v-if="list"
                         title="event receive complate">
                    </div>
                  </div>
                </router-link>
              </div>
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
              <div class="column is-2">
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
              <div class="column is-2">
                <div>
                </div>
              </div>
              <div class="column is-2">
                <div class="text-right fileUpload padding-top-5">

                  <label for="fileUpload"><span class="icon margin-right-10 margin-left-5">
                                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                                    </span>이미지 삽입하기</label>
                  <input v-on:change="onFileChange" type="file" id="fileUpload"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="columns padding-top-10">
        <!--<div id="UploadBox" v-on:fileChosen="fileChosen">-->
        <!--<h2>파일 업로드 테스트</h2>-->
        <!--<span id='UploadArea'>-->
        <!--<label for="FileBox">Choose A File: </label><input type="file" id="FileBox"><br>-->
        <!--<label for="NameBox">Name: </label><input type="text" id="NameBox"><br>-->
        <!--<button type='button' id='UploadButton' class='Button' v-on:click="startUpload">업로드 테스트</button></span>-->
        <!--</div>-->
        <div class="left-box">
          <canvas
            v-on:mousedown="this.onMouseDown"
            v-on:mousemove="this.onMouseMove"
            v-on:mouseup="this.onMouseUp"
            id="channel_canvas"></canvas>
        </div>
        <div class="right-box" id="chatting-box">
          <div class="chat-nav text-left padding-left-10 h5">채팅</div>
          <div id="chat" class="chat column padding-0">
            <div style="padding: 0!important;" class="padding-0">
              <div class="inline-block">
                <div class="padding-20 chat-online-profile">
                  <img class="width-50" src="../assets/ic_user.png"/>
                  <div class="inline-block vertical-align-top padding-left-10 padding-top-5">
                    <span class="NGB">{{nicknameKey}}</span>
                    <div class="vertical-align-bottom">
                      <div class="online inline-block"></div>
                      online
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="padding-10 chat-list-background">
              <div class="chat-box">
                <ul id="chat-log" class="chat-log text-right">
                  <li id="own-nickname" class="text-center">----- {{nicknameKey}}님이 입장하였습니다 -----
                  </li>
                  <!-- 클래스 바인딩 -->
                  <div v-for="message in this.messages"
                       v-bind:class="{ 'text-left': !message.own }"
                       class="chat-message-list block margin-bottom-0">
                    <li v-bind:class="{ 'chat-message-ui-receive' : !message.own }"
                        class="chat-message-ui inline-block">
                      {{message.nickname}} : {{message.text}}
                    </li>
                  </div>
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
  import main from '../components/Main.vue'

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
      // this.message.msg, this.message.nickname을 객체로 받아서 쉽게 사용할 수 있음
      receiveMessage: function ({msg, nickname}) {
        // 반복되는 li에 class 추가하기
        this.messages.push({text: msg, nickname: nickname, own: false}) // own은 자기 메세지면 true 여기서는 수신된 메세지므로 상대방 메세지. false
        // 메세지 전송시 스크롤 자동 하단
        document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight
      }
    },
    /**
     * 최초 실행하는 mounted. 변수선언
     */
    mounted: function () {
      this.canvas = document.getElementById('channel_canvas')
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
        checkNull: false,
        list: [],
        sharedState: main.state,
        selectedFile: '',
        fileReader: '',
        chatDiv: ''
//        name: '',
//        imageData: ''
      }
    },
    methods: {
//      fileChosen (event) {
//        this.selectedFile = event.target.files[0]
//        document.getElementById('NameBox').value = this.selectedFile.name
//      },
//
//      startUpload () {
//        // 파일 업로드 테스트용
//        // 데이터 타입 정의를 해야될텐데..
//        if (document.getElementById('FileBox').value !== '') {
//          this.fileReader = new FileReader()
//          console.log(this.selectedFile.type)
//          this.name = document.getElementById('NameBox').value
//          let content = '<span id="NameArea">Uploading' + this.selectedFile.name + 'as' + this.name + '</span>'
//          content += '<span id="Uploaded"> - <span id="MB">0</span>/' + Math.round(this.selectedFile.size / 1048576) + 'MB</span>'
//          document.getElementById('UploadArea').innerHTML = content
//          this.fileReader.onload = function (event) {
//            if (!event) {
//              this.imageData = this.fileReader.content
//            } else {
//              this.imageData = event.target.result
//            }
//            this.$socket.emit('Upload', {'Name': name, 'Data': this.imageData})
//          }
//          this.$socket.emit('Start', {'Name': name, 'Size': this.selectedFile.size})
//        } else {
//          alert('please select a file :)')
//        }
//      },

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
        console.log('this is pw key pass !!!!! : ' + this.passwordKeyConfig)
      },

      hide (modalName) {
        this.$modal.hide(modalName)
      },

      configPassword (passwordKey) {
        if (this.passwordKey === this.passwordKeyConfig) {
          this.errorPassword = false
          this.hide('modal')

          this.show('setNicknameModal')
          this.setNickName()
        } else {
          this.errorPassword = true
          this.passwordKey = ''
        }

        console.log('pwd', this.passwordKeyConfig)
      },

      logInChannel () {
        if (this.nicknameKey !== '') {
          this.hide('setNicknameModal')
          this.containerSection.style.display = 'block'
        } else {
          this.checkNull = true
        }
      },

      setNickName () {
        if (this.nicknameKey) {
          this.hide('setNicknameModal')
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
        this.$socket.emit('drawing', {
          type: 'beginPath',
          position: {x, y},
          size: penSize,
          color: colorCode
        })
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

        // 데이터를 보낼때 객체로 전송
        this.$socket.emit('sendMessage', {
          nickname: this.nicknameKey,
          msg: this.chatMessage
        })

        // 자기가 보낸 채팅 내용을 메세지 리스트에 추가
        this.messages.push({text: this.chatMessage, nickname: this.nicknameKey, own: true})

        this.chatMessage = ''

        // 메세지 전송시 스크롤 자동 하단
        document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight
      }
    },
    computed: {
      /* vuex 에 저장된 값을 꺼내온다 */
      passwordKeyConfig: function () {
        return this.$store.getters.getChannelPassword
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
    overflow: scroll;
    margin-bottom: 55px;

    &-log {
      width: 95%;
      padding: 10px;
    }

    &-input-form {
      position: fixed;
      padding: 10px;
      background-color: #D5D5D5;
      bottom: 0;
      width: 23%;
    }
    &-box {
      height: 80%;
    }
    &-message-ui {
      background-color: #2c3e50;
      padding: 10px;
      color: white;
      border-radius: 10px;
      margin-bottom: 5px;

      // chat-message-ui-receive
      &-receive {
        background-color: white;
        color: black;
        text-align: left !important;
      }
    }

    &-list-background {
      max-height: 300px
    }

    &-nav {
      display: none;
    }

    &-message-list:last-child {
      padding-bottom: 50px;
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

  .online {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #23d160;
    border: 1px #1cb251 solid;
  }

  #channel_canvas {
    cursor: url("../assets/img_cursor.png"), auto;
  }

  //파일 업로드 input form style
  .fileUpload label {
    display: inline;
    padding: .5em .75em;
    font-size: inherit;
    line-height: normal;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #e2e2e2;
    border-radius: .25em;
  }

  .fileUpload input[type="file"] { /* 파일 필드 숨기기*/
    width: 100px;
    height: 50px;
    display: none;
    clip: rect(0, 0, 0, 0);
  }

  // chat

  .chat-input-from {
    position: fixed;
    bottom: 0;
  }

  .chat-input-form {
    position: fixed;
  }

  .chat-online-profile {
    display: none;
  }

  .chat-list-background {
    max-height: 300px
  }

  @media (max-width: 1210px) {

    // mobile chatting list
    #chatting-box {
      float: none !important;
      right: 0 !important;
      position: fixed !important;
      width: 100%;
      bottom: 0;
    }

    #channel_canvas {
      margin-bottom: 150px;
    }

    .chat-input-form {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    .chat-online-profile {
      display: none;
    }

    .chat-list-background {
      max-height: 300px
    }

    // mobile chat navigation
    .chat-nav {
      display: block;
      width: 100%;
      height: 25px;
      background-color: white;
      border: 2px solid black;
    }
  }
</style>
