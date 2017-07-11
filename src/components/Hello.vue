<template>
    <div>
        <modal name="modal"
               :width="500"
               :height="300"
               @before-open="beforeOpen"
               @before-close="beforeClose">
            <div class="padding-30">
                <p class="h2 NGB text-center padding-top-20">Enter Password</p>
                <div>
                    <p class="h5 text-center padding-top-10 color-light is-active">입장하려면 비밀번호를 입력하세요..</p>
                </div>
                <div id="passwordIncorrectMsg" v-show="configPassword" style="margin-bottom: -30px;">
                    <p class="h4 text-center padding-top-10">비밀번호가 틀렸습니다. 다시 한 번 확인해 주세요! </p>
                </div>
                <div class="columns is-12">
                    <input v-model="passwordKey" class="input margin-left-30 margin-right-30 margin-top-50 "
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
                        <span v-on:click="changePenSize('13')" class="icon is-large"><i class="fa fa-circle"
                                                                                        aria-hidden="true"></i></span>
                            <span v-on:click="changePenSize('9')" class="icon is-medium"><i class="fa fa-circle"
                                                                                            aria-hidden="true"></i></span>
                            <span v-on:click="changePenSize('5')" class="icon"><i class="fa fa-circle"
                                                                                  aria-hidden="true"></i></span>
                            <span v-on:click="changePenSize('1')" class="icon is-small"><i class="fa fa-circle"
                                                                                           aria-hidden="true"></i></span>
                        </div>
                    </div>
                </section>
            </div>
            <div class="columns padding-top-10">
                <div class="left-box">
                    <canvas
                            v-on:mousedown="this.onMouseDown"
                            v-on:mousemove="this.onMouseMove"
                            v-on:mouseup="this.onMouseUp"
                            id="canvas"></canvas>
                </div>
                <div class="right-box">
                    <div class="chat column">
                        <div class="chat-box">
                            <ul id="chat-log" class="chat-log">
                                <li style="text-align: center">-----입장하였습니다-----</li>
                                <li v-for="message in this.messages">
                                    {{message}}
                                </li>
                            </ul>
                        </div>

                        <div class="chat-input-box">
                            <div class="field is-grouped chat-input-form">
                                <p class="control is-expanded">
                                    <input class="input" type="text" placeholder="메세지를 입력하세요" v-model="chatMessage"
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
      receiveMessage: function (message) {
        this.messages.push('other : ' + message)
      }
    },
    /**
     * 최초 실행하는 mounted
     */
    mounted: function () {
      this.canvas = document.getElementById('canvas')
      document.getElementById('in-channel-section').style.display = 'none'
      this.canvasContext = this.canvas.getContext('2d')
      this.canvasContext.strokeStyle = '#3dff22'
      this.canvasContext.lineJoin = 'round'
      this.canvasContext.lineWidth = 5
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.show()
    },
    data () {
      return {
        /**
         * 데이터 초기화
         */
        passwordKey: '1234',
        isDrawingMode: false,
        savedDrawingData: [],
        chatMessage: '',
        messages: [],
        myCanvasColor: '',
        myCanvasPenSize: '',
        time: 0,
        duration: 5000
      }
    },
    methods: {
      show () {
        this.$modal.show('modal')
      },
      hide () {
        this.$modal.hide('modal')
      },
      beforeOpen (event) {
        this.time = Date.now()
        console.log('this is modal')
      },
      beforeClose (event) {
        if (this.time + this.dump < Date.now()) {
          event.stop()
          console.log('this is modal close')
        }
      },
      configPassword (passwordKey) {
        if (this.passwordKey === '1234') {
          document.getElementById('in-channel-section').style.display = 'block'
          this.hide()
        } else {
          console.log('password false')
          return false
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
        this.messages.push('userName : ' + this.chatMessage)
        this.chatMessage = ''
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
            bottom: 2%;
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

</style>
