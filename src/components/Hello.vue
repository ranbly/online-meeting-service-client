<template>
  <div>
    <div>
      <!--<button class="button is-primary" v-on:click="this.redrawWithStep">그림 되돌리기</button> -->

      <div id="canvas-ui">
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
    </div>

    <canvas
      v-on:mousedown="this.onMouseDown"
      v-on:mousemove="this.onMouseMove"
      v-on:mouseup="this.onMouseUp"
      id="canvas"></canvas>

    <div class="chat">
      <ul id="chatLog" class="chat_log">
        <li style="text-align: center">-----입장하였습니다-----</li>
        <li v-for="message in this.messages">
          {{message}}
        </li>
      </ul>

      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="메세지를 입력하세요" v-model="chatMessage" @keyup.enter="this.sendChat">
        </p>
        <p class="control">
          <a class="button is-info" v-on:click="this.sendChat">
            전송
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
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
    mounted: function () {
      this.canvas = document.getElementById('canvas')
      this.canvasContext = this.canvas.getContext('2d')
      this.canvasContext.strokeStyle = '#3dff22'
      this.canvasContext.lineJoin = 'round'
      this.canvasContext.lineWidth = 5
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    },
    data () {
      return {
        isDrawingMode: false,
        savedDrawingData: [],
        chatMessage: '',
        messages: [],
        myCanvasColor: ''
      }
    },
    methods: {
      onMouseDown (event) {
        this.isDrawingMode = true
        this.appendDrawingData()
        this.canvasContext.beginPath()

        const x = event.pageX - this.canvas.offsetLeft
        const y = event.pageY - this.canvas.offsetTop
        const colorCode = this.canvasContext.strokeStyle

        console.log(colorCode)$
        this.canvasContext.moveTo(x, y)
        this.saveLatestDrawingData(x, y, colorCode)

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'beginPath', position: {x, y}, color: colorCode})
      },

      drawFromSocket (data) {
        const {type, position, color} = data

        switch (type) {
          case 'beginPath':
            this.canvasContext.beginPath()
            this.canvasContext.moveTo(position.x, position.y)
            this.canvasContext.strokeStyle = color
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

        this.canvasContext.lineTo(x, y)
        this.canvasContext.stroke()

        this.saveLatestDrawingData(x, y, colorCode)

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'lineTo', position: {x, y}, color: colorCode})
      },

      onMouseUp (event) {
        this.isDrawingMode = false

        // Send Drawing Data
        this.$socket.emit('drawing', {type: 'end'})
      },

      appendDrawingData () {
        this.savedDrawingData.push([])
      },

      saveLatestDrawingData (x, y, colorCode) {
        this.savedDrawingData[this.savedDrawingData.length - 1].push({x, y, colorCode})
      },

      clear () {
        this.$socket.emit('clear')
      },

      changeColor (color) {
        this.canvasContext.strokeStyle = color
        this.myCanvasColor = color
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #canvas-ui {
    margin-top: 30px;
  }

  .chat_log {
    width: 95%;
    height: 200px;
    padding: 10px;

  }

  .name {
    width: 10%;
  }

  .message {
    width: 70%;
  }

  .chat {
    width: 40%;
    height: 200px;
    background-color: #EAEAEA;
    position: absolute;
    bottom: 15%;
    right: 5%;
    text-align: left;
  }
</style>
