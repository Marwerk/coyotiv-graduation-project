<script>
export default {
  name: 'checkAvailabilityForm',
  data() {
    return {
      form: {
        checkIn: '',
        checkOut: '',
        rooms: '',
        guests: ''
      }
    }
  }
}
</script>

<template lang="pug">
#booking.section
  .section-center
    .container
      .row
        .col-md-7.col-md-push-5
          .booking-cta
            h1 Book your stay!
            p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laborum consequatur est perferendis sapiente minus mollitia quis, esse adipisci exercitationem voluptatum! Quisquam, voluptas. Quisquam, voluptas.
        .col-md-4.col-md-pull-7
          .booking-form
            form
              .row
                .col-sm-6
                  .form-group
                    span.form-label Check In
                    input.form-control(type='date' required='')
                .col-sm-6
                  .form-group
                    span.form-label Check Out
                    input.form-control(type='date' required='')
              .row
                .col-sm-4
                  .form-group
                    span.form-label Rooms
                    select.form-control
                      option 1
                      option 2
                      option 3
                    span.select-arrow
                .col-sm-4
                  .form-group
                    span.form-label Guests
                    select.form-control
                      option 1
                      option 2
                      option 3
                    span.select-arrow
                .col-sm-4
              .form-btn
                button.submit-btn Check Availability
</template>

<style>
/* General styling for section */
.section {
  position: relative; /* Positioning relative to its normal position */
  height: 100vh; /* Height is set to 100% of the viewport height */
}

/* Styling for centering content within the section */
.section .section-center {
  position: absolute; /* Absolute positioning within the section */
  top: 50%; /* Positioned at 50% from the top */
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%); /* Centered vertically */
  transform: translateY(-50%);
}

/* Booking form styling */
.booking-form {
  background-color: #fcf6f5; /* Background color of the form */
  padding: 50px 20px;
  -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3); /* Shadow effect */
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 4px; /* Rounded corners */
}

/* Styling for form input fields e.g. check in/out, rooms, guests */
.booking-form .form-group {
  position: relative;
  margin-bottom: 30px; /* Space below each form group */
}

/* General styling for background of form input fields */
.booking-form .form-control {
  background-color: #ebecee; /* Background color */
  border-radius: 4px; /* Rounded corners */

  height: 40px; /* Fixed height */
  -webkit-box-shadow: none; /* No shadow */
  box-shadow: none;
  color: #3e485c; /* Text color */
  font-size: 14px; /* Font size */
}

/* Placeholder color styling for form controls */
.booking-form .form-control::-webkit-input-placeholder,
.booking-form .form-control:-ms-input-placeholder,
.booking-form .form-control::placeholder {
  color: rgba(62, 72, 92, 0.3); /* Lighter color for placeholders */
}

/* Styling for invalid date inputs */
.booking-form input[type='date'].form-control:invalid {
  color: rgba(62, 72, 92, 0.3); /* Color for invalid dates */
}

/* Styling for select controls */
.booking-form select.form-control {
  -webkit-appearance: none; /* Removing default appearance */
  -moz-appearance: none;
  appearance: none;
}

/* Styling for the arrow beside the select control */
.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 0px;
  bottom: 4px;
  width: 32px;
  line-height: 32px;
  height: 32px;
  text-align: center;
  pointer-events: none;
  color: rgba(62, 72, 92, 0.3); /* Arrow color */
  font-size: 14px;
}

/* Styling for the arrow icon */
.booking-form select.form-control + .select-arrow:after {
  content: '\279C';
  display: block;
  -webkit-transform: rotate(90deg); /* Rotation of arrow */
  transform: rotate(90deg);
}

/* Styling for form labels */
.booking-form .form-label {
  display: inline-block;
  color: #3e485c; /* Text color */
  font-weight: 700; /* Bold text */
  margin-bottom: 6px;
  margin-left: 7px;
}

/* Styling for the Check Availability button */
.booking-form .submit-btn {
  display: inline-block;
  color: #fcf6f5;
  background-color: var(--nav-background); /* Background color from a custom property */
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 4px; /* Rounded corners */
  border: none;
  -webkit-transition: 0.2s all; /* Transition effect */
  transition: 0.2s all;
}

/* Hover and focus effect for the Check Availability button */
.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
  opacity: 0.9; /* Reduced opacity */
}

/* Styling for the booking call to action (CTA) */
.booking-cta {
  margin-top: 80px; /* Margin at the top */
  margin-bottom: 30px; /* Margin at the bottom */
}

/* Styling for the headings within the booking CTA */
.booking-cta h1 {
  font-size: 52px; /* Large font size */
  text-transform: uppercase; /* Uppercase text */
  color: #fcf6f5;
  font-weight: 700;
}

/* Styling for paragraph text within the booking CTA */
.booking-cta p {
  font-size: 16px; /* Font size */
  color: rgba(255, 255, 255, 0.8); /* Slightly transparent text color */
}

@media screen and (min-width: 800px) {
  .booking-cta h1 {
    font-size: 36px; /* Smaller font size for devices narrower than 800px */
  }
  .booking-form {
    padding: 20px 10px; /* Reduced padding */
  }
  .booking-cta {
    margin-top: 30px; /* Reduced margin */
    margin-bottom: 10px;
  }
}
</style>
