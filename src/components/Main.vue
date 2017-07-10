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
                <router-link v-bind:to="'/channel'" onload="alert('hi')">방금 방문한 채널로 이동하기</router-link>
                <div class="margin-top-20">
                    <div id="channel-div" class="columns is-multiline">
                        <div class="column is-6" v-for="todo in this.todos">
                            <div class="margin-bottom-5 card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{{todo.text}}</p>
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
                                        <p class="h1 padding-top-35">+ 채널 생성하기</p>
                                        <input type="text" v-model="todoText" placeholder="Add New Channel!"/>
                                        <button v-on:click="this.addTodo" class="btn">추가</button>
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
          todoText: '',
          todos: [
            {text: 'vue'}
          ]
        }
      },
      methods: {
        addTodo: function () {
          const newTodo = this.todoText.trim()
          if (!newTodo) {
            return
          }
          this.todos.push(
            {text: newTodo, done: false}
          )
          this.todoText = ''
        }
      }
    }
</script>

<style lang="scss">
    .make-channel {
        height: 180px !important;
    }
</style>
