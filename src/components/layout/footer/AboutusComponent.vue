<template>
    <section class="about-us">
    <div class="container">
        <h2>About Us</h2>
        <p>OLX is a global online marketplace for buying and selling goods and services, founded in 2006. Our mission is to make it easy for people to buy and sell almost anything, promoting a circular economy where items can find new homes and uses.</p>
        <p>With millions of listings and a wide range of categories, OLX connects local communities and fosters economic growth. Join us in making a difference!</p>
    </div>
</section>
</template>

<script scoped>
export default {
  created () {
  },
    name:'AboutusComponent',
}
</script>

<style scoped>
.about-us {
    background-color: #f2f2f2;
    padding: 80px 0;
    text-align: center;
}

.about-us .container {
    max-width: 800px;
    margin: 0 auto;
}

.about-us h2 {
    font-size: 36px;
    margin-bottom: 30px;
}

.about-us p {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
}

</style>
