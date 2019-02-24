<template>
    <div>
        {{ predValue }}
    </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs'

export default {
    data: () => {
        return {
            predValue: ''
        }
    },
    methods: {
        async loadModel() {
            const model = await tf.loadModel('http://localhost:8081/model.json').then((promisedModel) => {
                console.log("LOADED")
                let img = new Image()
                img.src = '@/assets/pizza1.jpg'
                const example = tf.fromPixels(new ImageData(img.width, img.height))
                const prediction = promisedModel.predict(example)
                predValue = prediction
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    mounted () {
        this.loadModel()
    }
}
</script>
