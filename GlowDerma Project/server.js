const express = require('express');
const port =  5050
const app = express();
const rateLimit = require('express-rate-limit');

app.use(express.json())
//set view engine template to headers
app.set("view engine","hbs")
//directory to folder
app.set("views","views")

app.get("/new",(req,res)=>{
    const new_data = {
        name: "Ravi Vira",
        website: "E-commerce Website",
        price: 999,
        description: "An innovative platform for easy online shopping."
      };
    res.render("index",new_data)
})

app.get("/oldnew",(req,res)=>{
    const new_data = {
        name: "Ravi",
        website: "SAAS Website",
        price: 999000,
        description: "An innovative platform for easy online shopping.",
        tasks: ["haircut","face scrub","something else"]
      };
    res.render("index",new_data)
})

//code


// Doctors Page
app.get('/doctors', (req, res) => {
  res.render('doctors', {
      title: "Our Expert Doctors",
      description: "GlowDerma specializes in providing top-notch medical care for all your skincare needs. Our team of expert dermatologists is here to help.",
  });
});

// Services Page
app.get('/services', (req, res) => {
  const category = req.query.category || "General Services";
  res.render('services', {
      title: `${category} Services`,
  });
});

// Book Appointment Page
app.get('/book-appointment', (req, res) => {
  const { name, email, service, preferredDate, preferredTime } = req.body;
  res.render('book-appointment', {
      title: "Appointment Confirmation",
      appointment: { name, email, service, preferredDate, preferredTime },
  });
});

// Offerings Page
app.get('/offerings', (req, res) => {
  const offerings = [
      {
          name: "Anti-Aging Treatment",
          price: 5000,
          duration: "60 mins",
          description: "Advanced treatment to reduce fine lines and wrinkles",
          available: true,
      },
      {
          name: "Acne Treatment",
          price: 3000,
          duration: "45 mins",
          description: "Specialized treatment for acne-prone skin",
          available: true,
      },
      {
          name: "Chemical Peel",
          price: 4000,
          duration: "30 mins",
          description: "Skin resurfacing treatment for even tone",
          available: false,
      },
  ];
  res.render('offerings', { title: "Our Offerings", offerings });
});

// Testimonials Page
app.get('/testimonials', (req, res) => {
  const testimonials = [
      {
          name: "John Doe",
          rating: 5,
          comment: "Excellent service!",
          date: "2024-01-20",
      },
      {
          name: "Jane Smith",
          rating: 4,
          comment: "Very professional staff",
          date: "2024-01-18",
      },
  ];
  res.render('testimonials', { title: "Testimonials", testimonials });
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})