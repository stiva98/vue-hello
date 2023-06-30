const { createApp } = Vue

createApp ({
    methods: {
        myButton() {
            this.img = 'https://th.bing.com/th/id/R.1055f0d6a469baeaa6e2f8c79dfd91bf?rik=NVRP1fS9C%2fn53Q&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f2%2fa%2f367467.jpg&ehk=cAzU%2foEnRNng2mS2z6NTY7e8imqVpX16nrLn6ynj0Z8%3d&risl=&pid=ImgRaw&r=0'
        }
    },

    data(){
        return {
            nameTitle: 'Hello World!',
            classImg: 'dimension',
            img: null
        }
    }
}).mount('#title');
