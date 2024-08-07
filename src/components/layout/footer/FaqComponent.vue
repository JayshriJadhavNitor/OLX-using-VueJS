<template>
  <div class="faq">
    <h2>Frequently Asked Questions (FAQ) about OLX</h2>
    
    <div v-for="(faqItem, i) in faqItems" :key="i" class="faq-item">
      <div 
        class="faq-question" 
        @click="toggleAnswer(i)">
        {{ faqItem.question }}
      </div>
      <div 
        class="faq-answer" 
        :class="{ show: activeIndex === i }">
        {{ faqItem.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqComponent',
  data() {
    return {
      faqItems: [
        {
          question: 'What is OLX?',
          answer: 'OLX is a global online marketplace where users can buy and sell goods and services locally. It provides a platform for individuals and businesses to connect and trade in various categories such as electronics, vehicles, furniture, and more.'
        },
        {
          question: 'How do I buy on OLX?',
          answer: 'To buy on OLX, browse listings in your desired category and location. Contact sellers directly through the platform to negotiate and arrange for purchase. Always ensure to meet in a safe location and inspect items before finalizing the transaction.'
        },
        {
          question: 'How do I sell on OLX?',
          answer: 'Selling on OLX is easy. Create an account, take clear photos of your item, and write a detailed description. Post your ad in the relevant category and respond promptly to inquiries from potential buyers. Once a deal is agreed upon, arrange for safe payment and delivery.'
        },
        {
          question: 'Is OLX free to use?',
          answer: 'Yes, OLX is free for users to browse listings, post ads, and contact sellers or buyers. There are no charges for basic use of the platform. However, premium features or promotions may involve fees.'
        },
        {
          question: 'How can I ensure a safe transaction on OLX?',
          answer: 'To ensure a safe transaction, always meet in a public place and inspect the item before making any payment. Use OLX\'s messaging system to communicate with buyers or sellers and avoid sharing personal contact information until necessary.'
        },
        {
          question: 'Can I trust the sellers on OLX?',
          answer: 'OLX encourages users to review seller ratings and read feedback from previous transactions to gauge trustworthiness. Use common sense and caution when dealing with unfamiliar sellers, and report any suspicious activity to OLX customer support.'
        },
        {
          question: 'How can I contact OLX customer support?',
          answer: 'For any inquiries or assistance, you can contact OLX customer support through their website or app. They provide help with account issues, technical support, and any other questions you may have about using the platform.'
        }
      ],
      activeIndex: null // Keeps track of the index of the currently active FAQ answer
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.faq {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.faq h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 10px;
}

.faq-answer {
  display: none;
  color: #666;
  line-height: 1.6;
}

.faq-answer.show {
  display: block;
}
</style>
