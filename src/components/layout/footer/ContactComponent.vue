<template>
    <section class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div class="form-group">
                <label for="name">Your Name<span class="text-danger">*</span></label>
                <input type="text" id="name" name="name" class="form-control"  placeholder="Enter name" required>
              </div>
              <div class="form-group">
                <label for="email">Your Email</label><span class="text-danger">*</span>
                <input type="email" id="email" name="email" class="form-control" placeholder="Enter email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label><span class="text-danger">*</span>
                <textarea id="message" name="message" class="form-control" rows="5" placeholder="Enter message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script scoped>
export default {
    name:'ContactComponent',
}
</script>


<style scoped>
.contact-section {
    padding: 80px 0;
    background-color: #f9f9f9;
  }
  
  .contact-form {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form h2 {
    margin-bottom: 30px;
    text-align: center;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea.form-control {
    resize: vertical; /* Allow vertical resizing */
  }
  
  .btn-primary {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .container {
    max-width: 960px;
    margin: 0 auto; /* Center align */
  }
  
</style>
