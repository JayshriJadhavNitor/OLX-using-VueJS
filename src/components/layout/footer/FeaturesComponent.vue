<template>
    <section class="features">
    <div class="container">
        <h2>Key Features</h2>
        <div class="feature-item">
            <div class="feature-icon">
            </div>
            <div class="feature-text">
                <h3>Easy to Use</h3>
                <p>OLX offers a user-friendly platform designed to make buying and selling simple and efficient.</p>
            </div>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
            </div>
            <div class="feature-text">
                <h3>Wide Selection</h3>
                <p>Explore millions of listings across various categories, ensuring there's something for everyone.</p>
            </div>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
            </div>
            <div class="feature-text">
                <h3>Local Communities</h3>
                <p>Connect with sellers and buyers in your local area, promoting community interaction and trust.</p>
            </div>
        </div>
    </div>
</section>

</template>

<script scoped>
export default {
    name:'FeaturesComponent',
}
</script>

<style scoped>
.features {
    background-color: #fff;
    padding: 60px 0;
    text-align: center;
}

.features .container {
    max-width: 800px;
    margin: 0 auto;
}

.features h2 {
    font-size: 36px;
    margin-bottom: 30px;
}

.feature-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

.feature-icon {
    flex: 0 0 auto;
    width: 80px;
    height: 80px;
    margin-right: 20px;
}

.feature-icon img {
    max-width: 100%;
    max-height: 100%;
}

.feature-text {
    text-align: left;
}

.feature-text h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.feature-text p {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
}

</style>