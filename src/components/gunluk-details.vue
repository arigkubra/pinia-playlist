<template>
    <div class="box">
          <div>
            <p>{{ gunluk.diary }}</p>
            <small class="date">{{ gunluk.date }}</small>
          </div>
          <div>
            <i class="material-icons">favorite</i>
            <i class="material-icons">delete</i>
          </div>
        </div>
</template>

<script>
export default {
    props: ["gunluk"]
}
</script>

